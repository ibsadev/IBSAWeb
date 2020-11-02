import React, { Component } from 'react'

import styled from 'styled-components'

import Bruin from '../../images/bruin.png'

const OneContainer = styled.div`
   padding: 7em 0 3em 0;
`;

const H2 = styled.h2`
   text-align: center;
   font-size: 40px;
   margin-bottom: 20px;
   margin-top: 10px;
`;

const Img = styled.img`
   width: 320px;
`;

const OneParagraph = styled.p`
   text-align: center;
   font-size: 20px;
`


export default class One extends Component {
   render() {
      return (
         <OneContainer className="wrapper style1" id="one">
            <div className="container 75%">
               <div className="row 200%">
                  <div className="6u 12u$(medium)">
                     <header class="major">
                        <Img src={Bruin} alt="bruin" className="container  inline-item-down show-on-scroll"/>
                     </header>
                  </div>
                  <div className="6u$ 12u$(medium)  inline-item-up show-on-scroll">
                     <H2><u>Who We Are</u></H2>
                     <OneParagraph>
                        Indonesian Bruins Student Association (IBSA) is a UCLA based student organization that promotes and celebrates Indonesian culture in the UCLA and broader LA community.
                     </OneParagraph>
                  </div>
               </div>
            </div>
         </OneContainer>
      )
   }
}
