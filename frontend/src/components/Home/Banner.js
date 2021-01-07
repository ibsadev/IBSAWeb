import React, { Component } from 'react'

import styled from 'styled-components'

import Header from '../Header/Header'

const BannerHeading = styled.h2`
   margin-top: 30px;
   font-size: 200px;
`;

export default class Banner extends Component {
   render() {
      return (
         <div id="banner">
            <Header />
				<BannerHeading>IBSA</BannerHeading>
				<p>UCLA's  Bruins Student Association</p>
			</div>
      )
   }
}
