import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {mediaQueries} from '../../shared/config'

import './styles.css'
import IBSA from '../../images/ibsa_logo.jpeg';

import { Pivot as Hamburger } from 'hamburger-react';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  ${mediaQueries.tablet} {
    flex-flow: column nowrap;
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    opacity: ${({ open }) => open ? '1' : '0'};
    right: 0;
    height: 100vh;
    padding-top: 3.5rem;
    width: 100%;
    z-index: ${({ open }) => open ? '0' : '-1'};
    transition: opacity 0.3s ease-in-out;
  }
`;

const Li = styled.li`
  text-align: center;
  position: relative;
  font-weight: 700;
  top: 0em;
  left: 0%;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
  z-index: ${({ open }) => open ? '0' : '-1'};
  transition: transform 0.5s ease-in-out;
  font-family: Montserrat;
`;

const NavBar = styled.header`
  ${mediaQueries.tablet} {
    z-index: ${props => props.open ? "10000" : "-1"}
  }
`

const Header = (props) => {
  const [isOpen, setOpen] = useState(false)
  console.log(isOpen)
  return(
    <NavBar open={isOpen} id="header" className="alt">
      <nav id="logo">
        <Link to="/">
          <img src={IBSA} alt="IBSA Logo" />
        </Link>
      </nav>
      <nav id="nav1">
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul> 
      </nav>
      <nav id="nav2">
        {/* <ul>
          <li><Link to="/signin">Sign In</Link></li>
        </ul> */}
      </nav>
      <nav id="nav-mobile" open={isOpen}>
        <Ul open={isOpen} id="mobile-ul">
          <Li open={isOpen} onClick={useState(false)}>
            <Link className={isOpen ? "" : "link-inactive"} to="/">Home</Link>
          </Li>
          <Li open={isOpen} onClick={useState(false)}>
            <Link className={isOpen ? "" : "link-inactive"} to="/about">About Us</Link>
          </Li>
          <Li open={isOpen} onClick={useState(false)}>
            <Link className={isOpen ? "" : "link-inactive"} to="/events">Events</Link>
          </Li>
          {/* <Li open={isOpen} onClick={useState(false)} id="SignIn"><Link to="/signin">Sign In</Link></Li> */}
        </Ul>
        <div id="hamburger">
          <Hamburger direction="right" color="#1f8ad0" toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </NavBar>
  )
}

export default Header
