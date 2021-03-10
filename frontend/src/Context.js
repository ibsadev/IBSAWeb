import Cookies from 'js-cookie';
import React, { Component } from 'react';
import Data from './Data';

const Context = React.createContext(); 

export class Provider extends Component {
  state = {
    upcomingEvents : [],
    authenticatedUser : null,
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
   * Sets upcoming events as in the state for shared use (Currently: Events and Home)
   */
  setUpcomingEvents = async() => {
    this.data.getUpcomingEvents().then( apiData => {
      this.setState({
        upcomingEvents: apiData,
      })
    })
  }

  /**
   * Sets cookies 
   * @param {String} username 
   * @param {String} password 
   */
  signIn = async(username, password) => {
    const res = await this.data.getUser(username, password)
    if (res.success) {
      Cookies.set("jwt", res.token)
      this.setState(() => {
        return {
          authenticatedUser : res.user,
        }
      })
    } 
    return res;
  }

  signOut = () => {
    this.setState({authenticatedUser: null})
    Cookies.remove("jwt")
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