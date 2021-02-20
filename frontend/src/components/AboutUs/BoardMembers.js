import {React} from 'react'
import styled from 'styled-components'
import PeopleCard from './PeopleCard'

import {board_members} from '../../shared/BoardAndOfficers_content'

const Container = styled.div`
  margin-bottom: 1em;
  display:flex;
  flex-grow: 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function BoardMembers() {
   return (
      <Container className="container-fluid" id="board_members">
         {board_members.map((board, index) => 
            <PeopleCard 
               key = {index}
               imgURL = {board.img}
               name = {board.name}
               title = {board.title} />
         )}
      </Container>
   )
}
