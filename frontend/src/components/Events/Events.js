import React, { Component, useState } from 'react';
import styled from 'styled-components'
import { mediaQueries, colors } from '../../shared/config'

import './styles.css'
import Data from '../../Data';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Overlay } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap";

const localizer = momentLocalizer(moment);

const Heading = styled.h1`
  text-align: center;
  font-size: 65px;
  margin: 0.5em 0;

  ${mediaQueries.tablet} {
    font-size:50px;
  }
`;

function Event({ event }) {
  let popoverClickRootClose = (
    <Popover id="popover-trigger-click-root-close" style={{ opacity: 1 }}>
      <p><strong>{event.title}</strong></p>
      <p><strong>Start: </strong>{event.start.toLocaleTimeString()}</p>
      <p><strong>End: </strong>{event.end.toLocaleTimeString()}</p>
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
            <Heading>EVENTS</Heading>
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
          <Heading>PAST EVENTS</Heading>
        </div>
      </div>
    );
  }
}