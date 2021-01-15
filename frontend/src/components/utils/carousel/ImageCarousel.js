import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

const ImageContainer = styled.div`
   position: relative;
   height: 100vh;
   padding-top: 50vh;
   padding-bottom: 50vh;
   background-image:  url("../../styles/css/images/overlay.png"), url("../../images/ibsa_cover.jpg");
   background-position: center top;
   background-size: cover;
   line-height: 1.75;
   text-align: center;
`;

/**
 * Takes in an array of 
 */
export default function ImageCarousel (props) {
   return (
      <Carousel>

      </Carousel>
   )
}
