import React, { Component} from 'react';
import styled from 'styled-components'
import { mediaQueries } from '../../shared/config'
import { Helmet } from 'react-helmet';
import PastEvent from './PastEvent';
import './styles.css'

import EventCalendar from './EventCalendar';
import EventCarousel from './EventCarousel'

const TITLE = 'IBSA | Events';

const Heading = styled.h1`
  text-align: center;
  font-size: 65px;
  margin: 0.5em 0;

  ${mediaQueries.tablet} {
    font-size:50px;
  }
`;

export default class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      holidays: [],
      pastEvents: [],
      upcomingEvents: [],
      width : window.innerWidth
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  componentDidMount() {
    this.populateHolidays();
    this.populatePastAndUpcomingEvents();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  populateHolidays() {
    const { context } = this.props;
    context.data.getHolidays().then( holidays => {
      // console.log(holidays)
      this.setState({holidays})
    })
  }

  populatePastAndUpcomingEvents() {
    const {context} = this.props;
    context.data.getPastEvents().then( apiData => {
      this.setState({
        pastEvents : apiData
      })
    })
    context.data.getUpcomingEvents().then( apiData => {
      this.setState({
        upcomingEvents : apiData
      })
    })
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    console.log(this.state.pastEvents);
    console.log(this.state.upcomingEvents);
    let UpcomingEvents;
    if (this.state.width <= 768) {
      UpcomingEvents = <EventCarousel upcomingEvents = {this.state.upcomingEvents}/>
    } else {
      UpcomingEvents = <EventCalendar holidays = {this.state.holidays} />
    }
    return (
      <div id="events">
          <Helmet>
            <title>{TITLE}</title>
          </Helmet>
          <div id="current-events">
            <Heading>EVENTS</Heading>
            {UpcomingEvents}
        </div>
        <div id="past-events">
          <Heading>PAST EVENTS</Heading>
          <PastEvent pastEvents={this.state.pastEvents}/>
        </div>
      </div>
    );
  }
}