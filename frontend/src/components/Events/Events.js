import React, { Component} from 'react';
import styled from 'styled-components'
import { mediaQueries, colors } from '../../shared/config'
import { Helmet } from 'react-helmet';
import Instagram from './Instagram';
import './styles.css'

import EventCalendar from './EventCalendar';
import EventCarousel from './EventCarousel'

const TITLE = 'IBSA | Events';

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
    this.populatePastEvents();
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

  populatePastEvents() {
    let {context} = this.props;
    context.data.getPastEvents().then( pastEvents => {
      let itemarray = []
      pastEvents.data.forEach(item =>
        itemarray.push(item))
      this.setState({
        pastEvents : itemarray})
    })
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    let width = this.state.width
    console.log(width)
    let UpcomingEvents;
    if (width <= 768) {
      UpcomingEvents = <EventCarousel />
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
          <Instagram images={this.state.pastEvents}/>
        </div>
      </div>
    );
  }
}
