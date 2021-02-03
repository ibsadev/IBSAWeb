import React, { Component, useState } from 'react';
import styled from 'styled-components'
import { mediaQueries, colors } from '../../shared/config'
import { Helmet } from 'react-helmet';

import './styles.css'
import Data from '../../Data';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Overlay } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap";
const TITLE = 'IBSA | Events';

// Styled Components
const Heading = styled.h1`
  text-align: center;
  margin: 1em 0;

  ${mediaQueries.tablet} {
    font-size:50px;
  }

  ${mediaQueries.mobile} {
    font-size: 35px;
  }
`;

export default class Events extends Component {
  state = {
    holidays: [],
    pastEvents: [],
  }

  componentDidMount() {
    this.populateHolidays();
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

  populateHolidays() {
    const { context } = this.props;
    context.data.getHolidays().then( holidays => {
      // console.log(holidays)
      this.setState({holidays})
    })
  }

  populatePastEvents() {
    const {context} = this.props;
    context.data.getPastEvents().then( pastEvents => {
      this.setState({pastEvents})
    })
  }
}
const localizer = momentLocalizer(moment);

function Event({ event }) {
  let timeStart;
  let timeEnd
  let image;
  let button;
  
  if(event.image == "none") {
    timeStart = <p><strong>Start: </strong>{new Date(event.start).toLocaleDateString()}</p>;
    timeEnd = <p><strong>End: </strong>{new Date(event.end).toLocaleDateString()}</p>;
  } else {
    timeStart = <p><strong>Start: </strong>{new Date(event.start).toLocaleString()}</p>;
    timeEnd = <p><strong>End: </strong>{new Date(event.end).toLocaleString()}</p>;
    image = <img src={event.image}></img>;
    button = <button><a href={event.linkToEvent}>Sign up</a></button>;
  }

  let popoverClickRootClose = (
    <Popover id="popover-trigger-click-root-close" style={{ opacity: 1 }}>
      <p><strong>{event.title}</strong></p>
      {image}
      {timeStart}
      {timeEnd}
      {button}
    </Popover>
  );

  // console.log(event);
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
