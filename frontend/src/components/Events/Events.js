import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Helmet } from 'react-helmet';

import UpcomingEvent from './UpcomingEvent';
import PastEvent from './PastEvent';


const TITLE = 'IBSA | Events';


const Events = () => {
  return (
    <EventsContainer>
      <Helmet><title>{TITLE}</title></Helmet>
      <UpcomingEvent />
      <PastEvent />
    </EventsContainer>
  )
}

// styled components declaration

const EventsContainer = styled.div`
  display: block;
  z-index: -999;
  background: radial-gradient(circle, rgba(243,243,246,1) 59%, rgba(220,238,250,1) 80%);
`;


export default Events;
