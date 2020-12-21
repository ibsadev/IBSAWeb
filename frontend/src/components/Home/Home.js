import React, { Component } from 'react';

// Components import
import Banner from './Banner'
import One from './One'
import Two from './Two'

export default class Home extends Component {
  componentDidMount() {
    document.querySelector('body').setAttribute('class', "landing")
  }

  componentWillUnmount() {
    document.querySelector('body').removeAttribute('class')
  }
  render() {
     return (
       <div>
        <Banner />
        <One />
        <Two />
      </div>
     )
  }
}