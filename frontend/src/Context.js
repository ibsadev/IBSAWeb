import Cookies from 'js-cookie';
import React, { Component } from 'react';
import Data from './Data';

const Context = React.createContext(); 

export class Provider extends Component {
  
  /**
   * authenticatedUser:
   * - A reference for all private routes to have, where if it is null, 
   * a user may not access private routes. 
   * - This is also a way to store user information for use between components
   */
  state = {
    upcomingEvents : [],
    authenticatedUser : Cookies.getJSON('authenticatedUser') || null,
  }

  constructor() {
    super();
    this.data = new Data();
  };

  render() {
    const value = {
        data: this.data,
        upcomingEvents : this.state.upcomingEvents,
        actions: {
          setUpcomingEvents : this.setUpcomingEvents,
          signIn : this.signIn,
        }
    }

    return (
      <Context.Provider value={ value }>
        {this.props.children}
      </Context.Provider>  
    );
  }

  /**
   * Sets upcoming events as in the state for shared use 
   * Between Events and Home Page
   */
  setUpcomingEvents = async() => {
    this.data.getUpcomingEvents().then( apiData => {
      this.setState({
        upcomingEvents: apiData,
      })
    })
  }

  /**
   * Sets token and user info as cookies.
   * @param {String} email input email from signIn
   * @param {String} password input password from Sign In
   */
  signIn = async(email, password) => {
    const res = await this.data.getUser(email, password)
    if (res.success) {
      Cookies.set("jwt", res.token)
      Cookies.set("authenticatedUser", JSON.stringify(res.user), {expires: 1})
      this.setState(() => {
        return {
          authenticatedUser : res.user,
        }
      })
    } 
    return res;
  }

  /**
   * Signs the user out, removes all cookies
   */
  signOut = () => {
    this.setState({authenticatedUser: null})
    Cookies.remove("jwt")
    Cookies.remove("authenticatedUser")
  }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */
export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}