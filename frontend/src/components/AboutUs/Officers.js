import {React} from 'react'
import styled from 'styled-components'
import PeopleCard from './PeopleCard'

import {mediaQueries} from '../../shared/config'

import {officers} from '../../shared/BoardAndOfficers_content'

const CardContainer = styled.div`
   border-radius:1em;
   width: 50%;
   height: auto;
   padding-bottom: 1em;
   max-width: 22.5%;
   margin: 2em 2em;
   flex-grow: 1;

   ${mediaQueries.mobile} {
      min-width:80%;
      margin: 2em 2em;
   }

   ${mediaQueries.tablet} {
      max-width: 40%;
   }
`;

const Container = styled.div`
  padding-bottom: 1em;
  display:flex;
  flex-grow: 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function Officers() {
   return (
      <Container className="container-fluid" id="officers">
         {officers.map((officer, index) => 
            <CardContainer>
               <PeopleCard 
                  key = {index}
                  imgURL = {officer.img}
                  name = {officer.name}
                  title = {officer.title} />
            </CardContainer>

         )}
      </Container>
   )
}
