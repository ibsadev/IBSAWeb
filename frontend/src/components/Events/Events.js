import React, { Component} from 'react';
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
import {mediaQueries, colors} from '../../shared/config'

import UpcomingEvent from './UpcomingEvent';
// import PastEventSection from './PastEvent';
import PastEventV2 from './PastEventV2';

import './styles.css'

const TITLE = 'IBSA | Events';

const EventsContainer = styled.div`
  display: block;
  z-index: -999;
  background: radial-gradient(circle, rgba(243,243,246,1) 59%, rgba(220,238,250,1) 80%);
`

const Heading = styled.h1`
  text-align: center;
  color: ${colors.blue};
  font-weight: bold;
  padding-top: 1.5em;
  ${mediaQueries.mobile} {
    padding: 1.5em 1em 0 1em;
  }
`;

const UpcomingEventsContainer = styled.div`
  margin-bottom: 3em;
`

const HorizontalLine = styled.hr`
  border: 1px solid ${colors.blue};
  width: 65%;
  margin: 0 auto;
  margin-bottom: 2em;
  ${mediaQueries.tablet} {
    width: 75%;
  }
  ${mediaQueries.mobile} {
    width: 100%;
  }
`;


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
        <HorizontalLine />
        <UpcomingEvent upcomingEvents={this.props.context.upcomingEvents}/>
        <Heading className="heading">PAST EVENTS</Heading>
        <HorizontalLine />
        <PastEventV2 pastEvents={this.state.pastEvents} />
        {/* <PastEventSection pastEvents={this.state.pastEvents}/> */}
      </EventsContainer>
    );
  }
}
