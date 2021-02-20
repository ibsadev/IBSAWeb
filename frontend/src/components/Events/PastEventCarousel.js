import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

const ImageContainer = styled.img`
   height: inherit;
   width: inherit;
`;


export default function PastEventCarousel(props) {
   const {content} = props
   return (
      <Carousel>
         { content.map((imgURL, index) => 
            <Carousel.Item key={index}>
               <ImageContainer src = {imgURL} />
            </Carousel.Item>
         )}
      </Carousel>
   )
}

