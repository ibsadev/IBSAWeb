import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'

import Bruin from '../../images/ibsa_f3.jpg'

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
         <OneContainer className="wrapper style1" id="two">
            <div className="container">
            <div id="images">
                  <Img src={Bruin}></Img>
               </div>
               <div id="textbox">
                  <h2>IBSA Winter Retreat</h2>
                  <p>Come join us on our annual winter retreat! It will take place in Big Bear Lake, and we’ll be having a series of games, activities and bonding sessions! </p>
                  <Link to="/signin"><input type="button" value="Sign Up" /></Link>
               </div>
            </div>
         </OneContainer>
      )
   }
}
