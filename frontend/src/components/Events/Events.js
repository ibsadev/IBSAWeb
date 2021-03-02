import React, { Component} from 'react';
import styled from 'styled-components'
import { mediaQueries } from '../../shared/config'
import { Helmet } from 'react-helmet';

import UpcomingEvent from './UpcomingEvent'
import PastEventSection from './PastEvent';

import './styles.css'



const TITLE = 'IBSA | Events';

const Heading = styled.h1`
  text-align: center;
  font-weight: bold;
  margin: 0.5em 0;

  ${mediaQueries.tablet} {
    font-size:30px;
  }

  ${mediaQueries.mobile} {
    font-size: 30px;
  }
`;

export default class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pastEvents: [],
      upcomingEvents: [],
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
    context.data.getUpcomingEvents().then( apiData => {
      this.setState({
        upcomingEvents : apiData
      })
    })
  }

  render() {
    console.log(this.state.upcomingEvents)
    return (
      <div id="events">
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <div id="current-events">
          <Heading>UPCOMING EVENTS</Heading>
          <UpcomingEvent upcomingEvents={this.state.upcomingEvents}/>
        </div>
        <div id="past-events">
          <Heading>PAST EVENTS</Heading>
          <PastEventSection pastEvents={this.state.pastEvents}/>
        </div>
      </div>
    );
  }
}
