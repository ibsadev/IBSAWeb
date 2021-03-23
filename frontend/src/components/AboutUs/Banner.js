import React, { Component } from 'react'
import styled from 'styled-components'

import AboutBanner from '../../images/ibsa_p1.jpg'
import overlay from '../../styles/css/images/overlay.png'

const BannerContainer = styled.div`
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
`

const Heading = styled.h1`
   color: white;
   font-weight: 800;
   font-size: 5em;
`

const Subheading = styled.h2`
   color: white;
   color: #aaa;
   margin-bottom: 1.75em;
   text-transform: uppercase;
` 

export default class Banner extends Component {
   render() {
      return (
         <BannerContainer imgURL={AboutBanner} overlay={overlay}>
				<Heading className="heading">ABOUT US</Heading>
				<Subheading className="subheading">Learn more about who we are</Subheading>
			</BannerContainer>
      )
   }
}

