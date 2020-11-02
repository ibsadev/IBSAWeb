import React, { Component } from 'react';

import Banner from './Banner'
import One from './One'
import Two from './Two'

export default class Home extends Component {
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