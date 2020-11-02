import React, { Component } from 'react'

import styled from 'styled-components'

const BannerHeading = styled.h2`
   margin-top: 30px;
   font-size: 200px;
`;

export default class Banner extends Component {
   render() {
      return (
         <div id="banner">
				<BannerHeading>IBSA</BannerHeading>
				<p>UCLA's Indonesian Bruins Student Association</p>
			</div>
      )
   }
}
