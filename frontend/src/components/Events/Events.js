import React, { Component} from 'react';
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
import {mediaQueries} from '../../shared/config'

import UpcomingEvent from './UpcomingEvent'
import PastEventSection from './PastEvent';

import './styles.css'

const TITLE = 'IBSA | Events';

const EventsContainer = styled.div`
  display: block;
  padding-top: 140px;
  z-index: -999;
  background: linear-gradient(135deg, rgba(243,243,246,1) 28%, rgba(179,240,255,1) 75%);
  ${mediaQueries.tablet} {
    padding-top: 122px;
  }
`

const Heading = styled.h1`
  text-align: center;
  font-weight: bold;
  margin: 0.5em 0;
  ${mediaQueries.mobile} {
    padding: 0 1em;
  }
`;

const UpcomingEventsContainer = styled.div`
  margin-bottom: 3em;
`

export default class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pastEvents: [],
    }
  }

  componentDidMount() {
    this.populatePastAndUpcomingEvents();
  }

  populatePastAndUpcomingEvents() {
    const {context} = this.props;
    context.data.getPastEvents().then( apiData => {
      this.setState({
        pastEvents : apiData
      })
    })
    context.actions.setUpcomingEvents();
  }

  render() {
    // console.log(this.state.upcomingEvents)
    return (
      <EventsContainer>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <Heading className="heading">UPCOMING EVENTS</Heading>
        <UpcomingEvent upcomingEvents={this.props.context.upcomingEvents}/>
        <Heading className="heading">PAST EVENTS</Heading>
        <PastEventSection pastEvents={this.state.pastEvents}/>
      </EventsContainer>
    );
  }
}
