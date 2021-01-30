import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import overlay from '../../images/overlay.png'

const BannerHeading = styled.h2`
   margin-top: 30px;
   font-size: 200px;
   color: #ffffff;
   display: inline-block;
   font-size: 4.0em;
   line-height: 1.35;
   margin-bottom: 0.0em;
`;

const BannerParagraph = styled.p`
   color: #aaa;
   font-size: 1.5em;
   margin-bottom: 1.75em;
   text-transform: uppercase;
`;

const ImageContainer = styled.div`
   position: relative;
   height: 100vh;
   padding-top: 50vh;
   padding-bottom: 50vh;
   background-image:  url(${props => props.overlay}), url(${props => props.imgURL});
   background-position: center top;
   background-size: cover;
   line-height: 1.75;
   text-align: center;
`;

/**
 * Takes in an array of 
 */
export default function HomeCarousel (props) {
   const {contents} = props
   return (
      <Carousel>
         { contents.map((content, index) => 
            <Carousel.Item key={index}>
               <ImageContainer imgURL={content.image} overlay={overlay}>
                  <BannerHeading>IBSA</BannerHeading>
                  <BannerParagraph>Indonesian Bruins Student Association</BannerParagraph>
               </ImageContainer>
            </Carousel.Item>
         )}
      </Carousel>
   )
}
