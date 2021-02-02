import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

export default () => (
  <footer id="footer">
    <div className="container">
      <ul className="icons">
        <li><a href="https://www.instagram.com/bruins.ibsa/" className="icon fa-instagram"></a></li>
        <li><a href="https://www.facebook.com/groups/ibsaucla/" className="icon fa-facebook"></a></li>
        <li><a href="https://www.linkedin.com/company/ibsaucla/about/" className="icon fa-linkedin"></a></li>
        <li><a href="https://www.youtube.com/channel/UCGpRZ-RXaURw2_m2z4dIM4Q" className="icon fa-youtube-play"></a></li>
        <li><a href="mailto:bruin.ibsa@gmail.com" className="icon fa-envelope"></a></li>
      </ul>
      <ul className="footlinks">
        <li><Link to="/">Home</Link></li>
        <li>|</li>
        <li><Link to="/about">About Us</Link></li>
        <li>|</li>
        <li><Link to="/events">Events</Link></li>
      </ul>
    </div>
  </footer>
)