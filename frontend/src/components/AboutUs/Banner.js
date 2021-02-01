import React, { Component } from 'react'

import styles from './styles.css' //contains css for banner image

import Header from '../Header/Header'


export default class Banner extends Component {
   render() {
      return (
         <div id="abanner">
            <Header />
				<h2>ABOUT US</h2>
				<p>Learn more about who we are</p>
			</div>
      )
   }
}
