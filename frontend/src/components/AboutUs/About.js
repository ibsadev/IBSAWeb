import React from 'react';
import Quotes from './Quotes'
import PeopleCard from './PeopleCard'
import styled from 'styled-components'
import {mediaQueries, colors, fonts} from '../../shared/config'

import Natanael from '../../images/officers/natanael.JPG';
import Natasha from '../../images/officers/natasha.JPG';

const AboutContainer = styled.div`
  margin-top: 150px;
`

const Container = styled.div`
  margin-bottom: 1em;
`;

const TeamHeader = styled.h1`
  margin: 1em 0 1em 0;
  color: ${colors.blue};
  text-align: center;
  font-size: 5em;
  font-weight: 800;
  font-style: bold;
`;

const Row = styled.div`
  justify-content: space-evenly;
  margin: 6em 0;
`;

const HorizontalLine = styled.hr`
  border: 1px solid ${colors.blue};
  margin: 0 3em 0 3em;
`;

export default () => (
  <AboutContainer>
    <Quotes />
    <TeamHeader> Our Team.</TeamHeader>
    <HorizontalLine />
    <Container className="container-fluid">
      <Row className="row">
          <PeopleCard 
            imgURL = {Natanael}
            name= "Natanael Wijaya"
            title= "Internal Events Officer"
          />
          <PeopleCard 
            imgURL = {Natasha}
            name = "Natasha Grace"
            title = "Media and Public Relations"
          />
      </Row>
      <Row className="row">
          <PeopleCard 
            imgURL = {Natanael}
            name= "Natanael Wijaya"
            title= "Internal Events Officer"
          />
          <PeopleCard 
            imgURL = {Natasha}
            name = "Natasha Grace"
            title = "Media and Public Relations"
          />
      </Row>
      <Row className="row">
          <PeopleCard 
            imgURL = {Natanael}
            name= "Natanael Wijaya"
            title= "Internal Events Officer"
          />
          <PeopleCard 
            imgURL = {Natasha}
            name = "Natasha Grace"
            title = "Media and Public Relations"
          />
          <PeopleCard 
            imgURL = {Natasha}
            name = "Natasha Grace"
            title = "Media and Public Relations"
          />
      </Row>
    </Container>
  </AboutContainer>
)