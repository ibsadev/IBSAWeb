import React from 'react';
import {Link} from 'react-router-dom'

import IBSA from '../images/ibsa_logo.jpeg'


export default (props) => (
  <header id="header" class="alt">
    <nav id="logo">
      <Link to="/">
        <img src={IBSA} alt="IBSA Logo" ></img>
      </Link>
    </nav>
    <nav id="nav1">
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul> 
    </nav>
    <nav id="nav2">
      <ul>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </nav>
  </header>
)