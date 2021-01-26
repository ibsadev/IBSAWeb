import {React, Component} from 'react'
import styled from 'styled-components'
import PeopleCard from './PeopleCard'

import {officers} from '../../shared/BoardAndOfficers_content'

const Container = styled.div`
  margin-bottom: 1em;
  display:flex;
  flex-grow: 0;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Officers() {
   return (
      <Container className="container-fluid" id="officers">
         {officers.map((officer, index) => 
            <PeopleCard 
               key = {index}
               imgURL = {officer.img}
               name = {officer.name}
               title = {officer.title} />
         )}
      </Container>
   )
}
