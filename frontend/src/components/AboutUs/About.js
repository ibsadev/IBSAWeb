import React from 'react';
import styled from 'styled-components'
import { Helmet } from 'react-helmet';

import Banner from './Banner'
import Quotes from './Quotes'
import Officers from './Officers'
import BoardMembers from './BoardMembers'

import {colors, mediaQueries} from '../../shared/config'

const TITLE = 'IBSA | About Us';

const AboutContainer = styled.div`
  padding-top: 140px;
  ${mediaQueries.tablet} {
    padding-top: 122px;
  }
`

const TeamHeader = styled.h1`
  padding: 1em 0 0.5em 0;
  color: ${colors.blue};
  text-align: center;
  font-size: 4em;
  font-weight: 800;
  font-style: bold;
`;

const HorizontalLine = styled.hr`
  border: 1px solid ${colors.blue};
  margin: 0 3em 0 3em;
`;

const WithGradientBackground = styled.div`
  background: rgb(243,243,246);
  background: linear-gradient(135deg, rgba(243,243,246,1) 28%, rgba(179,240,255,1) 75%);
`

export default function About() {
  return(
    <AboutContainer>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Banner />
      <Quotes />
      <WithGradientBackground>
        <TeamHeader className="heading"> Our Team</TeamHeader>
        <HorizontalLine />
        <BoardMembers/>
        <Officers />
      </WithGradientBackground>
    </AboutContainer>
  )
}