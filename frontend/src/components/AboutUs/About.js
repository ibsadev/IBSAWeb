import React from 'react';
import Quotes from './Quotes'
import PeopleCard from './PeopleCard'
import styled from 'styled-components'
import {mediaQueries, colors, fonts} from '../../shared/config'

const AboutContainer = styled.div`
  margin-top: 150px;
`

export default () => (
  <AboutContainer>
    <Quotes />
    <PeopleCard />
  </AboutContainer>
)