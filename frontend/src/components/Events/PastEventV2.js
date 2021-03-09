import { startSession } from 'mongoose';
import React, { Component } from 'react'
import styled from 'styled-components';
import {mediaQueries} from '../../shared/config'

const Container = styled.div`
   width: 85%;
   margin: 0 auto 0 auto;
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
   align-items: center;
   justify-content: center;
   ${mediaQueries.mobile} {
      align-items: flex-start;
   }
`
const Image = styled.img`
   width: 30%;
   margin: 0 1em;
   ${mediaQueries.mobike} {
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
               <EventsContainer>
                  <h2 className="heading">{block.title}</h2>
                  <ImageSlide>
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
