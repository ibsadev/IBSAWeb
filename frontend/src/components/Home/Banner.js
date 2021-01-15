import React, { Component } from 'react'
import styled from 'styled-components'

import BannerIMG from '../../images/ibsa_cover.jpg'

import Carousel from 'react-bootstrap/Carousel'

const BannerHeading = styled.h2`
   margin-top: 30px;
   font-size: 200px;
`;

const BannerContainer = styled.div`
   position: relative;
   height: 100vh;
   padding-top: 50vh;
   padding-bottom: 50vh;
   background-image:  url("../../styles/css/images/overlay.png"), url(${props.imgURL});
   background-position: center top;
   background-size: cover;
   line-height: 1.75;
   text-align: center;
`;

export default class Banner extends Component {
   render() {
      return (
         <Carousel>
            <Carousel.Item>
               <div id="banner">
                  <BannerHeading>IBSA</BannerHeading>
                  <p>UCLA's  Bruins Student Association</p>
               </div>
            </Carousel.Item>
            <Carousel.Item>
               <div id="banner">
                  <BannerHeading>IBSA</BannerHeading>
                  <p>UCLA's  Bruins Student Association</p>
               </div>
            </Carousel.Item>
            <Carousel.Item>
               <div id="banner">
                  <BannerHeading>IBSA</BannerHeading>
                  <p>UCLA's  Bruins Student Association</p>
               </div>
            </Carousel.Item>
         </Carousel>
      )
   }
}
