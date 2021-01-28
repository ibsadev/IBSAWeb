import React from 'react';
import styled from 'styled-components'
import { mediaQueries, colors } from '../../shared/config'

import './styles.css'

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Heading = styled.h1`
  text-align: center;
  font-size: 65px;
  margin: 0.5em 0;

  ${mediaQueries.tablet} {
    font-size:50px;
  }
`;

const localizer = momentLocalizer(moment)

export default () => (
  <div id="events">
      <div id="current-events">
        <Heading>EVENTS</Heading>
        <Calendar
          localizer={localizer}
          events={[]}
          defaultDate={new Date()}
        />
    </div>
    <div id="past-events">
      <Heading>PAST EVENTS</Heading>
    </div>
  </div>
)