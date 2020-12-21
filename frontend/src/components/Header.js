import React from 'react';
import {Link} from 'react-router-dom'


export default (props) => (
  <header id="header" class="alt">
    <h1 style={{fontSize : 20}}><strong><Link exact to="/">IBSA</Link></strong></h1>
    <nav id="nav">
      <ul>
        <li><Link exact to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/signin">Member's Sign In</Link></li>
      </ul>
    </nav>
  </header>
)