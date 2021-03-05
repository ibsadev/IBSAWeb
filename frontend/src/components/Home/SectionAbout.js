import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'

import SectionImage from '../../images/ibsa_f4.JPG'
import { colors, mediaQueries } from '../../shared/config';

const Container = styled.div`
   border-left: 2.5px solid black;
   border-bottom: 2.5px solid black;
   position: relative;
   padding: 4em 4em;
   display:flex;
   align-items: center;
   justify-content: center;
   ${mediaQueries.mobile} {
      padding: 2em 1em;
   }
`
const Image = styled.img`
   width: 55%;
   ${mediaQueries.mobile} {
      display: none;
   }
`

const TextBox = styled.div`
   background-color: ${colors.blue};
   padding: 3.5em;
   z-index: 1;
   margin-left: -3em;
   box-shadow: 0px 0.125em 2em 0px rgba(0, 0, 0, 0.7);
   ${mediaQueries.mobile} {
      width: 100%;
      margin-left:0;
      padding: 2em;
   }
`

const SectionHeading = styled.h2`
   color: white;
   font-weight: 800;
   margin-bottom: 0.5em;
`

const SectionDescription = styled.h4`
   color: white;
   font-weight: 300;
   margin-bottom: 1em;
`

const Button = styled.button`
   background-color: white;
   font-size: 1.25em;
   color: ${colors.blue};
   &:hover {
      color: #1f8ad0;
      background-color: #aaa;
      text-decoration: none;
   }
   ${mediaQueries.mobile} {
      padding: 1em;
   }
`

export default class SectionAbout extends Component {
   render() {
      return (
         <Container>
            <Image src={SectionImage} className="img-fluid" />
            <TextBox>
               <SectionHeading className="heading">
                  WELCOME TO IBSA!
               </SectionHeading>
               <SectionDescription className="subheading">
                  Indonesian Bruins Student Association (IBSA) is a UCLA based student organization 
                  that promotes and celebrates Indonesian culture in the UCLA community.
               </SectionDescription>
               <Link to="/about">
                  <Button>CHECK US OUT!</Button>
               </Link>
            </TextBox>
         </Container>
      )
   }
}
