import styled from 'styled-components';
import {colors, mediaQueries} from '../../shared/config'
import {Link} from 'react-router-dom'

export const NavBar = styled.header`
   display: flex;
   align-items: center;
   background: transparent;
   justify-content: space-between;
   position: absolute;
   width: 100%;
   height: 9em;
   top: 0;
   left: 0;
   z-index: 10;
   ${mediaQueries.mobile} {
      height: auto;
      display: inline;
   }
`

export const NavWrapper = styled.ul`
   list-style: none;
   display: flex;
   align-items: center;
   padding-left: 0;
   margin-bottom: 0em;
   ${mediaQueries.mobile} {
      flex-direction: column;
      height: 30%;
      justify-content: space-between;
      padding-top: 7em;
   }
`

export const NavItem = styled.li`
   display: inline-block;
   font-size: 1.25em;
   margin-right: 1em;
   text-transform: uppercase;
   ${mediaQueries.mobile} {
      padding-left: 0;
      margin-right: 0;
   }
`

export const StyledLink = styled(Link)`
   color: ${colors.blue};
   padding: 1em;
   font-weight: 800;
   ${mediaQueries.notMobile} {
      &:hover {
         background-color: ${colors.blue};
         color: white;
         text-decoration: none;
      }
      transition: background-color 0.15s ease-in-out,
               color 0.15s ease-in-out;
   }
`

export const Image = styled.img`
   width: auto;
   height: 9em;
   ${mediaQueries.notMobile} {
      &:hover {
         transform: scale(1.25);
      }
      transition: transform .5s ease;
   }
   ${mediaQueries.mobile} {
      height: 7em;
   }
`
