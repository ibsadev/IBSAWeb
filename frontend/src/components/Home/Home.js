import React, { Component } from 'react';

// Components import
import Banner from './Banner'
import One from './One'
import Two from './Two'
import Header from '../Header'

export default class Home extends Component {
  render() {
     return (
       <div className="landing">
        <Header />
        <Banner />
        <One />
        <Two />
      </div>
     )
  }
}