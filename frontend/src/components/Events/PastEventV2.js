import { startSession } from 'mongoose';
import React, { Component } from 'react'
import styled from 'styled-components';
import {mediaQueries} from '../../shared/config'

const Container = styled.div`
   width: 75%;
   margin: 0 auto 0 auto;
   ${mediaQueries.tablet} {
      width: 85%;
   }
`

const EventsContainer = styled.div`
   margin: 0 auto 0 auto;
   padding-bottom: 2em;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const ImageSlide = styled.div`
   padding-bottom: 0.5em;
   display: flex;
   overflow-x: auto;
   -webkit-overflow-scrolling: touch;
   align-items: center;
   justify-content: ${props => props.justifyContent};
   -webkit-overflow-scrolling: touch;
   ${mediaQueries.tablet} {
      justify-content: ${props => props.justifyContentTablet};
   }
   ${mediaQueries.mobile} {
      align-items: center;
      justify-content: flex-start;
   }
`
const Image = styled.img`
   width: calc(33.33% - 0.5em);   
   margin: 0 0.5em;
   ${mediaQueries.mobile} {
      width: 50%;
   }
   ${mediaQueries.iphone7} {
      width: 80%;
   }
`

export default class PastEventV2 extends Component {
   render() {
      let {pastEvents} = this.props;
      return (
         <Container>
            {pastEvents && pastEvents.map((block, index) => 
               <EventsContainer
                  key = {index}
               >
                  <h2 className="heading">{block.title}</h2>
                  <ImageSlide
                     justifyContent = {block.images.length < 4 ? "center" : "flex-start"}
                     justifyContentTablet = {block.images.length < 3 ? "center" : "flex-start"}
                  >
                     {block.images.map((image, id) => 
                        <Image src={image} key={id} className="img-fluid" />
                     )}
                  </ImageSlide>
               </EventsContainer>
            )}
         </Container>
      )
   }
}
