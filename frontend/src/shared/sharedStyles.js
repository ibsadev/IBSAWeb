/**
 * sharedStyles consists of styled components that is used by 2 or more components
 */

 import styled from 'styled-components';
 import {colors, mediaQueries} from './config'
 
 export const HorizontalLine = styled.hr`
   border: 1px solid ${colors.blue};
   width: 65%;
   margin: 0 auto;
   margin-bottom: 2em;
   ${mediaQueries.tablet} {
     width: 75%;
   }
   ${mediaQueries.mobile} {
     width: 100%;
   }
 `;
 
 export const Heading = styled.h1`
   text-align: center;
   color: ${colors.blue};
   font-weight: bold;
   font-size: 3em;
   font-family: Montserrat;
   padding-top: 1.5em;
   ${mediaQueries.mobile} {
     padding: 1.5em 1em 0 1em;
   }
 `;