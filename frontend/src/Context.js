import React, { Component } from 'react';
import Data from './Data';

const Context = React.createContext(); 

export class Provider extends Component {
  state = {
    upcomingEvents : []
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
          setUpcomingEvents : this.setUpcomingEvents
        }
    }

    return (
      <Context.Provider value={ value }>
        {this.props.children}
      </Context.Provider>  
    );
  }

  setUpcomingEvents = async() => {
    this.data.getUpcomingEvents().then( apiData => {
      this.setState({
        upcomingEvents: apiData,
      })
    })
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