import React from 'react';
import styled from 'styled-components'
import { Helmet } from 'react-helmet';

import './styles.css'

import Banner from './Banner'
import Quotes from './Quotes'
import Officers from './Officers'
import BoardMembers from './BoardMembers'

import {colors} from '../../shared/config'

const TITLE = 'IBSA | About Us';

const TeamHeader = styled.h1`
  margin: 1em 0 1em 0;
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

export default function About() {
  return(
    <div>
    <Helmet>
      <title>{TITLE}</title>
    </Helmet>
    <Banner />
    <Quotes />
    <TeamHeader> Our Team</TeamHeader>
    <HorizontalLine />
    <BoardMembers/>
    <Officers />
  </div>
  )
}