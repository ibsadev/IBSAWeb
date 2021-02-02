import { React, Component } from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';

export default class Events extends Component {
  render() {
    return(
      <div id="notfound">
        <div class="notfound-bg">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="notfound">
            <div class="notfound-404">
              <h1>404</h1>
            </div>
            <h2>Page Not Found</h2>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <Link to="/">Homepage</Link>
            <div class="notfound-social">
              <a href="https://www.instagram.com/bruins.ibsa/"><i class="fa fa-instagram"></i></a>
              <a href="https://www.facebook.com/groups/ibsaucla/"><i class="fa fa-facebook"></i></a>
              <a href="https://www.linkedin.com/company/ibsaucla/about/"><i class="fa fa-linkedin"></i></a>
              <a href="mailto:bruin.ibsa@gmail.com"><i class="fa fa-envelope"></i></a>
            </div>
          </div>
      </div>
      // <!-- This templates was made by Colorlib (https://colorlib.com) -->
    );
  }
}