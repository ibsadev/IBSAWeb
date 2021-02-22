import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import overlay from '../../images/overlay.png'

const ImageContainer = styled.img`
   height: inherit;
   width: inherit;

   &:hover {
      opacity: 0.3;
   }
`;

export default function PastEventCarousel(props) {
   const {content} = props
   return (
      <Carousel 
         fade={true}
      >
         { content.map((imgURL, index) => 
            <Carousel.Item key={index}>
               <ImageContainer src={imgURL}/>
            </Carousel.Item>
         )}
      </Carousel>
   )
}

