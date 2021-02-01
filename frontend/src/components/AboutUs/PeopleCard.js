import React from 'react'
import styled from 'styled-components'
import {mediaQueries } from '../../shared/config'

const CardContainer = styled.div`
   border-radius:1em;
   width: 50%;
   height: auto;
   box-shadow: 10px 10px 5px;
   padding-bottom: 1em;
   max-width: 25%;
   margin: 2em 1em;
   flex-grow: 1;

   ${mediaQueries.mobile} {
      min-width:80%;
      margin: 2em 2em;
   }

   ${mediaQueries.tablet} {
      box-shadow: 7.5px 7.5px 3.725px;
      max-width: 40%;
   }
`;

const Image = styled.img`
   border-top-left-radius: 1em;
   border-top-right-radius: 1em;
   border-bottom: 1px solid black;
`;

const Description = styled.div`
   text-align: center;
   margin: 1em 0.5em;
`;

const Name = styled.h2`
   font-weight: 600;
`;

const Title = styled.p`
   margin-top: 1em;
`;


export default function PeopleCard(props) {
   const {imgURL, name, title} = props;
   return (
      <CardContainer>
         <Image src={imgURL} className="img-fluid"/>
         <Description>
            <Name> {name} </Name>
            <Title> {title} </Title>
         </Description>
      </CardContainer>
   )
}
