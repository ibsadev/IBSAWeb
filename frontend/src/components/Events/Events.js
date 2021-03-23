import React, { Component} from 'react';
import styled from 'styled-components'
import { Helmet } from 'react-helmet';

import UpcomingEvent from './UpcomingEvent';
import PastEvent from './PastEvent';


const TITLE = 'IBSA | Events';

const EventsContainer = styled.div`
  display: block;
  z-index: -999;
  background: radial-gradient(circle, rgba(243,243,246,1) 59%, rgba(220,238,250,1) 80%);
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
        <Helmet><title>{TITLE}</title></Helmet>
        <UpcomingEvent upcomingEvents={this.props.context.upcomingEvents}/>
        <PastEvent pastEvents={this.state.pastEvents} />
      </EventsContainer>
    );
  }
}
