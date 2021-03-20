import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {NavBar, Image, NavWrapper, NavItem, StyledLink} from './styles'
import { Pivot as Hamburger } from 'hamburger-react';
import IBSA from '../../images/ibsa_logo_transparent.png'

const HamburgerContainer = styled.nav`
   padding-right: 1em;
   z-index: ${({ open }) => open ? '10' : '0'};
`

const LogoContainer = styled.nav`
   padding-left: 1em;
   z-index: ${({ open }) => open ? '10' : '0'};
`

const Header = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
`

const HeaderContent = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   background-color: rgba(255, 255, 255, 0.8);
   display: inline;
   z-index: ${({ open }) => open ? '9' : '-1000'};
   opacity: ${({ open }) => open ? '1' : '0'};
   height: ${({ open }) => open ? '100vh' : '0'};
   width: 100%;
   transition: opacity 0.25s ease-in-out,
               height 0.25s ease-in-out;
`

export default function MobileHeader() {
   const [isOpen, setOpen] = useState(false)
   return (
      <NavBar>
         <Header>
            <LogoContainer open={isOpen}>
               <Link to="/">
                  <Image src={IBSA} alt="IBSA Logo"/>
               </Link>
            </LogoContainer>
            <HamburgerContainer open={isOpen}>
               <Hamburger direction="right" color="#1f8ad0" 
               toggled={isOpen} toggle={setOpen} 
               />
            </HamburgerContainer>
         </Header>
         <HeaderContent open={isOpen}>
            <NavWrapper>
               <NavItem open={isOpen} onClick={useState(false)}><StyledLink to="/about">About Us</StyledLink></NavItem>
               <NavItem open={isOpen} onClick={useState(false)}><StyledLink to="/events">Events</StyledLink></NavItem>
               <NavItem open={isOpen} onClick={useState(false)}><StyledLink to="/signin">Sign In</StyledLink></NavItem>
            </NavWrapper>
         </HeaderContent>
      </NavBar>
   )
}
