import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'

import Bruin from '../../images/ibsa_f1.jpg'

const OneContainer = styled.div`
   padding: 3em 0 3em 0;
`;

const H2 = styled.h2`
   text-align: left;
   font-size: 20px;
   margin-bottom: 20px;
   color: #ffffff;
`;

const Img = styled.img`
   width: 600px;
`;

const OneParagraph = styled.p`
   text-align: left;
   font-size: 20px;
   color: #ffffff;
`

export default class One extends Component {
   render() {
      return (
         <OneContainer className="wrapper style1" id="one">
            <div className="container">
               <div id="textbox">
                  <h2>Welcome to IBSA!</h2>
                  <p>Indonesian Bruins Student Association (IBSA) is a UCLA based student organization that promotes and celebrates Indonesian culture in the UCLA community.</p>
                  <Link to="/about"><input type="button" value="Check Us Out!" /></Link>
               </div>
               <div id="images">
                  <Img src={Bruin}></Img>
               </div>
            </div>
         </OneContainer>
      )
   }
}
