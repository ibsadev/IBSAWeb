import {React, Component} from 'react'
import styled from 'styled-components'
import PeopleCard from './PeopleCard'

import {officers} from './BoardAndOfficers_content'

const Row = styled.div`
  justify-content: space-evenly;
  margin: 6em 0;
`;

const Container = styled.div`
  margin-bottom: 1em;
`;

export default function Officers() {
   return (
      <Container className="container-fluid" id="officers">
         <Row className="row">
            {officers.map((officer, index) => 
               <PeopleCard 
                  key = {index}
                  imgURL = {officer.img}
                  name = {officer.name}
                  title = {officer.title} />
            )}
         </Row>
      </Container>
   )
}
