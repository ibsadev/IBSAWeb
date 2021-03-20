import {React} from 'react'
import styled from 'styled-components'
import PeopleCard from './PeopleCard'

import {mediaQueries} from '../../shared/config'

import {board_members} from '../../shared/BoardAndOfficers_content'
import {officers} from '../../shared/BoardAndOfficers_content'

const Container = styled.div`
   width: 90%;
   margin: 0 auto;
   display: grid;
   justify-content: space-between;
   grid-template-columns: 1fr 1fr 1fr;
   column-gap: 6em;
   row-gap: 6em;
   padding-bottom: 6em;
   border-radius:1em;
   ${mediaQueries.tablet} {
      grid-template-columns: 1fr 1fr;
   }
   ${mediaQueries.mobile} {
      grid-template-columns: 1fr;
      width: 85%;
   }
`;

export default function Team() {
   return (
      <Container className="container-fluid" id="board_members">
         {board_members.map((board, index) => 
            <PeopleCard 
               key = {index}
               imgURL = {board.img}
               name = {board.name}
               title = {board.title}
               bio = {board.bio}
               instalink = {board.instalink}
               lilink = {board.lilink}
            />
         )}
         {officers.map((officers, index) => 
            <PeopleCard
               key = {index}
               imgURL = {officers.img}
               name=  {officers.name}
               title = {officers.title}
               bio = {officers.bio}
               instalink = {officers.instalink}
               lilink = {officers.lilink}
            />
         )}
      </Container>
   )
}
