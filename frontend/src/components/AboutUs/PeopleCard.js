import React from 'react'
import styled from 'styled-components'
import { colors } from '../../shared/config'

import Natanael from '../../images/officers/natanael.JPG'

const CardContainer = styled.div`
   border-radius:0.5em;
   background-color: ${colors.white};
`;

export default function PeopleCard(props) {
   const {imgURL, name, title} = props;
   return (
      <CardContainer>
         <img src={imgURL} />
         <span> {name} </span>
         <span> {title} </span>
      </CardContainer>
   )
}
