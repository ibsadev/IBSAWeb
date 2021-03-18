import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {colors} from '../../shared/config'

import IBSA from '../../images/ibsa_logo_transparent.png'

const NavBar = styled.header`
   display: flex;
   align-items: center;
   background: transparent;
   justify-content: space-between;
   /* border-bottom: solid 1px rgba(144, 144, 144, 0.25); */
   box-shadow: 0px 0.0375em 0.125em 0px rgba(0, 0, 0, 0.05);
   position: absolute;
   width: 100%;
   height: 9em;
   top: 0;
   left: 0;
   z-index: 10;
`

const NavContainer = styled.nav`
   margin-left: ${props => props.pos === "left" ? "1.5em" : 0};
   margin-right: ${props => props.pos === "right" ? "1.5em" : 0};
   z-index: 10;
`

const NavWrapper = styled.ul`
   list-style: none;
   display: flex;
   align-items: center;
   padding-left: 0;
   margin-bottom: 0em;
`

const NavItem = styled.li`
   display: inline-block;
   font-size: 1.25em;
   margin-right: 1em;
   text-transform: uppercase;
`

const LeftLink = styled(Link)`
   color: white;
   padding: 1em;
   font-weight: 800;
   &:hover {
      background-color: ${colors.blue};
      color: white;
      text-decoration: none;
   }
   transition: background-color 0.15s ease-in-out,
               color 0.15s ease-in-out;
`

const RightLink = styled(Link)`
   color: white;
   padding: 1em;
   font-weight: 800;
   &:hover{
      background-color: ${colors.blue};
      text-decoration: none;
      color: white;
   }
   transition: background-color 0.15s ease-in-out,
               color 0.15s ease-in-out;
`

const MiddleLogo = styled.nav`
   width: 100%;
   margin-right: 140px;
   position: absolute;
   top: 0;
   left: 0;
   text-align: center;
`

const Image = styled.img`
   width: auto;
   height: 9em;
   &:hover {
      transform: scale(1.25);
   }
   transition: transform .5s ease;
`


export default class NewHeader extends Component {
   constructor(props) {
      super(props);

   }

   render() {
      return (
         <NavBar>
            <NavContainer pos="left">
               <NavWrapper>
                  <NavItem><LeftLink to="/about">About Us</LeftLink></NavItem>
                  <NavItem><LeftLink to="/events">Events</LeftLink></NavItem>
               </NavWrapper>
            </NavContainer>
            <MiddleLogo>
               <Link to="/">
                  <Image src={IBSA} alt="IBSA Logo"/>
               </Link>
            </MiddleLogo>
            <NavContainer pos="right">
               <NavWrapper>
                  <NavItem><RightLink to="/signin">Sign In</RightLink></NavItem>
               </NavWrapper>
            </NavContainer>
         </NavBar>
      )
   }
}
