import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'

import SectionImage from '../../images/ibsa_p4.jpg'
import { colors, mediaQueries } from '../../shared/config';

const Container = styled.div`
   border-right: 2.5px solid black;
   position: relative;
   padding: 4em 4em;
   display:flex;
   align-items: center;
   justify-content: center;
   ${mediaQueries.mobile} {
      padding: 1em;
   }
   z-index: 100;
`
const Image = styled.img`
   width: 50%;
   margin-left: -3em;
   ${mediaQueries.mobile} {
      display: none;
   }
`

const TextBox = styled.div`
   background-color: ${colors.blue};
   padding: 3.5em;
   z-index: 1;
   box-shadow: 0px 0.125em 2em 0px rgba(0, 0, 0, 0.7);
   ${mediaQueries.mobile} {
      width: 100%;
      padding: 2em;
   }
   ${mediaQueries.tablet} {
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

const TinyCircle = styled.div`
   position: absolute;
   bottom:-1.5em;
   background-color:  transparent;
   right:0;
   height: 1.5em;
   width: 1.5em;
   margin-right: -0.75em;
   margin-top: -2.25em;
   z-index: 10;
   border: solid 2.5px black;
   border-radius: 50%;
   ${mediaQueries.mobile} {
      height: 1em;
      width: 1em;
      margin-right: -0.5em;
      margin-top: 0.5em;
   }
`

export default class SectionEvents extends Component {
   render() {
      const {upcomingEvents} = this.props;
      return (
         <Container>
            <TextBox>
               <SectionHeading className="heading">
                  {upcomingEvents !== undefined ? 
                  upcomingEvents.title : 
                  "CHECK OUT OUR EVENTS"
                  }
               </SectionHeading>
               <SectionDescription className="subheading">
                  {upcomingEvents !== undefined ? 
                  upcomingEvents.description : 
                  "From IBSA Sports Cup, Thanksgiving Dinner, to Winter Retreat- we’ve done it all! Check out the fun and excitement that were captured on camera by clicking our link below!"
                  }
               </SectionDescription>
               <Link to="/events">
                  <Button>{upcomingEvents !== undefined ? 
                  "SIGN UP FOR EVENT" : 
                  "BROWSE EVENTS"
                  }</Button>
               </Link>
            </TextBox>
            <Image src={upcomingEvents !== undefined ? 
                  upcomingEvents.imageURL : 
                  SectionImage
                  } 
                  className="img-fluid"
                  instaImageSize = {upcomingEvents !== undefined ?
                  true : false} />
            <TinyCircle />
         </Container>
      )
   }
}
