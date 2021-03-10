import React from 'react';
import styled from 'styled-components'
import { Helmet } from 'react-helmet';

import Banner from './Banner'
import Quotes from './Quotes'
import Officers from './Officers'
import Team from './Team'

import {colors, mediaQueries} from '../../shared/config'

const TITLE = 'IBSA | About Us';

const AboutContainer = styled.div`
  padding-top: 140px;
  ${mediaQueries.tablet} {
    padding-top: 122px;
  }
`

const TeamHeader = styled.h1`
  padding: 0.5em 0 0.5em 0;
  margin: 0;
  color: ${colors.blue};
  text-align: center;
  font-size: 4em;
  font-weight: 800;
  font-style: bold;
`;

const HorizontalLine = styled.hr`
  border: 1px solid ${colors.blue};
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2em;
  ${mediaQueries.mobile} {
    width: 100%;
  }
`;

const WithGradientBackground = styled.div`
  background: rgb(243,243,246);
  background: radial-gradient(circle, rgba(243,243,246,1) 59%, rgba(220,238,250,1) 92%);
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
        <Team/>
        {/* <Officers /> */}
      </WithGradientBackground>
    </AboutContainer>
  )
}