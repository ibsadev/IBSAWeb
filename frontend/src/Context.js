import React, { Component } from 'react';
import Data from './Data';
import Cookies from 'js-cookie';

const Context = React.createContext(); 

export class Provider extends Component {

  state = {
    authenticatedUser : Cookies.getJSON('authenticatedUser') || null
  }

  constructor() {
    super();
    this.data = new Data();
  };

  render() {

    const value = {
        authenticatedUser: this.state.authenticatedUser,
        data: this.data,
        actions: {
          signIn : this.signIn,
          signOut : this.signOut
        }
    }
    return (
      <Context.Provider value={ value }>
        {this.props.children}
      </Context.Provider>  
    );
  }

  /**
   * makes a GET request to the server through getUser()
   * - SUCCESS - returns a JSON of user data
   * - ERROR - returns null
   * @param {*} username 
   * @param {*} password 
   */
  signIn = async (username, password) => {
    const user = await this.data.getUser(username, password)
    if (user !== null) {
      this.setState(() => {
        return {
          authenticatedUser: user
        }
      })
      Cookies.set('authenticatedUser', JSON.stringify(user), { expires : 1 });
    }
    return user
  }

  signOut = () => {
    this.setState({authenticatedUser: null})
    Cookies.remove('authenticatedUser')
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