import React from 'react'
import {mediaQueries} from '../../shared/config'

import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

import overlay from '../../images/overlay.png'
import Banner1 from '../../images/ibsa_cover.jpg'
import Banner2 from '../../images/ibsa_cover2.JPG'

const BannerHeading = styled.h1`
   margin-top: 30px;
   color: #ffffff;
   display: inline-block;
   font-size: 5em;
   font-weight: 800;
   letter-spacing: 3px;
   line-height: 1.35;
`;

const BannerSubheading = styled.h2`
   color: #aaa;
   margin-bottom: 1.75em;
   text-transform: uppercase;
   ${mediaQueries.iphone7} {
      font-size: 1.5em;
   }
`;

const ImageContainer = styled.div`
   position: relative;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-image:  url(${props => props.overlay}), url(${props => props.imgURL});
   background-position: center top;
   background-size: cover;
   line-height: 1.75;
   text-align: center;
`;

const contents = [
   {
      image:Banner1
   },
   {
      image:Banner2
   }
]
export default function Banner (props) {
   return (
      <Carousel >
         { contents.map((content, index) => 
            <Carousel.Item key={index}>
               <ImageContainer imgURL={content.image} overlay={overlay}>
                  <BannerHeading className="heading">IBSA</BannerHeading>
                  <BannerSubheading className="subheading">Indonesian Bruins Student Association</BannerSubheading>
               </ImageContainer>
            </Carousel.Item>
         )}
      </Carousel>
   )
}

