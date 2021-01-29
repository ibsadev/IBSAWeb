import React, { Component, useState } from 'react';

import './styles.css'
import Data from '../../Data';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Overlay } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap";

const localizer = momentLocalizer(moment);

function Event({ event }) {
  let popoverClickRootClose = (
    <Popover id="popover-trigger-click-root-close" style={{ opacity: 1 }}>
      <p><strong>{event.title}</strong></p>
      <p><strong>Start: </strong>{event.start.toLocaleString()}</p>
      <p><strong>End: </strong>{event.end.toLocaleString()}</p>
    </Popover>
  );

  console.log(event);
  return (
    <div>
      <div>
        <OverlayTrigger
          id="help"
          trigger="click"
          rootClose
          container={this}
          placement="top"
          overlay={popoverClickRootClose}
        >
          <div>{event.title}</div>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default class Events extends Component {
  state = {
    holidays: [],
  }

  componentDidMount() {
    const { context } = this.props;
    context.data.getHolidays().then( holidays => {
      console.log(holidays)
      this.setState({holidays})
    })
  }

  render() {
    return (
      <div id="events">
          <div id="current-events">
            <h2>Events</h2>
            <Calendar
              startAccessor="start"
              endAccessor="end"
              localizer={localizer}
              events={this.state.holidays}
              defaultDate={new Date()}
              components={{
                event: Event
              }}
            />
        </div>
        <div id="past-events">
          <h2>Past Events</h2>
        </div>
      </div>
    );
  }
}