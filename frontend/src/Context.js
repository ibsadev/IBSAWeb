import React, { Component } from 'react';
import Data from './Data';
import Cookies from 'js-cookie';

const Context = React.createContext(); 

export class Provider extends Component {

  constructor() {
    super();
    this.data = new Data();
  };

  render() {
    const value = {
        data: this.data,
        actions: {
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
   * Sets the jwt cookie upon success of sign in.
   * Returns the response from 'getUser'
   */
  signIn = async (email, password) => {
    const user = await this.data.getUser(email, password)

    if (user.success === true) {
      Cookies.set("jwt", user.token)
    }
    return user
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