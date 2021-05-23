import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components'
import {mediaQueries} from '../../shared/config'
import axios from "axios";

// Components import
import Banner from './Banner';
import Instagram from './Instagram';
import SectionAbout from './SectionAbout';
import SectionEvents from './SectionEvents';

const TITLE = 'IBSA | Home';

const ContentContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  ${mediaQueries.tablet}{
    width: 90%;
  }
  ${mediaQueries.mobile}{
    width: 95%;
  }
`

const WithGradientBackground = styled.div`
  background: rgb(243,243,246);
  background: linear-gradient(180deg, rgba(243,243,246,1) 44%, rgba(220,238,250,1) 100%);
`

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const Home = () => {
  const [instagramData, setInstagramData] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([])

  useEffect(() => {
    async function getInstagramData() {
      let res = await axios.get("http://ibsa-deployment.herokuapp.com/api/instagram/homepage")
      setInstagramData(res.data.data);
    }
    async function getUpcomingEvents() {
      let res = await axios.get('http://ibsa-deployment.herokuapp.com/api/instagram/upcomingevents');
      let data = res.data;
      setUpcomingEvents(data);
    }
    getUpcomingEvents();
    getInstagramData();
    document.querySelector('body').setAttribute('class', "landing")
    return function cleanup() {
      document.querySelector('body').removeAttribute('class')
    }
  }, [])

  return (
       <div>
         <Helmet>
           <title>{TITLE}</title>
         </Helmet>
        <Banner />
        <WithGradientBackground>
          <ContentContainer>
            <FadeInSection>
              <SectionAbout />
            </FadeInSection>
            <FadeInSection>
              <SectionEvents upcomingEvents={upcomingEvents[0]}/>
            </FadeInSection>
          </ContentContainer>
          <FadeInSection>
            { instagramData && 
              <Instagram  images={instagramData}/>
            }
          </FadeInSection>
        </WithGradientBackground>
      </div>
  )
}

export default Home