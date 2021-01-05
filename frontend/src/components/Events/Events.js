import React from 'react';

import './styles.css'

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

export default () => (
  <div id="events">
      <div id="current-events">
        <h2>Events</h2>
        <Calendar
          localizer={localizer}
          events={[]}
          defaultDate={new Date()}
        />
    </div>
    <div id="past-events">
      <h2>Past Events</h2>
    </div>
  </div>
)