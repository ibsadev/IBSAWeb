import React, { Component } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import styled from 'styled-components'
import {colors,mediaQueries} from '../../shared/config'

const Image = styled.img`
   /* width: 50%; */
   height: auto;
`;

const TextContainer = styled.div`
   width: 50%;
   background-color: ${colors.blue};
   color: ${colors.white};
   padding: 2em 3em;
   ${mediaQueries.iphone7} {
      display:none;
   }
`

const Title = styled.h1`
   font-size: 2em;
`;

export default class EventCarousel extends Component {
   render() {
      const {upcomingEvents} = this.props;
      return (
         <Carousel 
            className="upcoming-event-carousel"
            >
            {upcomingEvents.map((block, index) => 
               <Paper className = "carousel-items-container">
                  <Image src={block.imageURL} className="img-fluid" />
                  {/* <TextContainer>
                     <Title>{block.title}</Title>
                     <p>{block.description}</p>
                  </TextContainer> */}
               </Paper>
            )}
         </Carousel>
      )
   }
}
