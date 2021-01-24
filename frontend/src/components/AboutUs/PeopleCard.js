import React from 'react'
import styled from 'styled-components'
import { colors } from '../../shared/config'

const CardContainer = styled.div`
   border-radius:1em;
   width: 50%;
   height: auto;
   box-shadow: 7.5px 7.5px 3.725px;
   padding: 0 0 1em 0;
`;

const Image = styled.img`
   border-top-left-radius: 1em;
   border-top-right-radius: 1em;
   border-bottom: 1px solid black;
`;

const Description = styled.div`
   text-align: center;
   margin: 1em 0;
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
      <CardContainer className = "col-3">
         <Image src={imgURL} className="img-fluid"/>
         <Description>
            <Name> {name} </Name>
            <Title> {title} </Title>
         </Description>
      </CardContainer>
   )
}
