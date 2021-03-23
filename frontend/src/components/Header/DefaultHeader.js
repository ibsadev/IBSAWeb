import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import {NavBar, NavWrapper, NavItem, StyledLink, Image} from './styles'

import IBSA from '../../images/ibsa_logo_transparent.png'

const Logo = styled.nav`
   width: 100%;
   margin-right: 140px;
   position: absolute;
   top: 0;
   left: 0;
   text-align: center;
`

export const NavContainer = styled.nav`
   margin-left: ${props => props.pos === "left" ? "1.5em" : 0};
   margin-right: ${props => props.pos === "right" ? "1.5em" : 0};
   z-index: 10;
`

export default class DefaultHeader extends Component {
   render() {
      return (
         <NavBar>
            <NavContainer pos="left">
               <NavWrapper>
                  <NavItem><StyledLink to="/about">About Us</StyledLink></NavItem>
                  <NavItem><StyledLink to="/events">Events</StyledLink></NavItem>
               </NavWrapper>
            </NavContainer>
            <Logo>
               <Link to="/">
                  <Image src={IBSA} alt="IBSA Logo"/>
               </Link>
            </Logo>
            <NavContainer pos="right">
               <NavWrapper>
                  <NavItem><StyledLink to="/signin">Sign In</StyledLink></NavItem>
               </NavWrapper>
            </NavContainer>
         </NavBar>
      )
   }
}
