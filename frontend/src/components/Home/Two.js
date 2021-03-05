import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'

import Picture from '../../images/ibsa_f3.jpg'

const OneContainer = styled.div`
   padding: 3em 0 3em 0;
`;

const Img = styled.img`
   width: 600px;
`;


export default class One extends Component {
   render() {
      return (
         <OneContainer className="wrapper style1" id="two">
            <div className="container">
            <div id="images">
                  <Img src={Picture}></Img>
               </div>
               <div id="textbox">
                  <h2 className="heading">IBSA Winter Retreat</h2>
                  <p className="subheading">Come join us on our annual winter retreat! It will take place in Big Bear Lake, and we’ll be having a series of games, activities and bonding sessions! </p>
                  <Link to="/signin"><input type="button" value="Sign Up" /></Link>
               </div>
            </div>
         </OneContainer>
      )
   }
}
