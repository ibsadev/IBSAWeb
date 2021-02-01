import React from 'react';
import styled from 'styled-components'

import Banner from './Banner'
import Quotes from './Quotes'
import Officers from './Officers'
import BoardMembers from './BoardMembers'

import {mediaQueries, colors, fonts} from '../../shared/config'

// const AboutContainer = styled.div`
//   margin-top: 140px;
// `

const TeamHeader = styled.h1`
  margin: 1em 0 1em 0;
  color: ${colors.blue};
  text-align: center;
  font-size: 5em;
  font-weight: 800;
  font-style: bold;
`;

const HorizontalLine = styled.hr`
  border: 1px solid ${colors.blue};
  margin: 0 3em 0 3em;
`;

export default () => (
//removed about container and replaced header with new header in Banner class
  <div>
    <Banner />
    <Quotes />
    <TeamHeader> Our Team</TeamHeader>
    <HorizontalLine />
    <BoardMembers/>
    <Officers />
  </div>
)