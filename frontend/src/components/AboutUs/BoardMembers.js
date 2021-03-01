import {React} from 'react'
import styled from 'styled-components'
import PeopleCard from './PeopleCard'

import {mediaQueries} from '../../shared/config'

import {board_members} from '../../shared/BoardAndOfficers_content'

const Container = styled.div`
  margin-bottom: 1em;
  display:flex;
  flex-grow: 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

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

export default function BoardMembers() {
   return (
      <Container className="container-fluid" id="board_members">
         {board_members.map((board, index) => 
            <CardContainer>
               <PeopleCard 
                  key = {index}
                  imgURL = {board.img}
                  name = {board.name}
                  title = {board.title} 
                  bio = {board.bio}
                  instalink = {board.instalink}
                  lilink = {board.lilink}/>
            </CardContainer>
         )}
      </Container>
   )
}
