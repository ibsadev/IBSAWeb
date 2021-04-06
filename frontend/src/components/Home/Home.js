import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components'
import {mediaQueries} from '../../shared/config'

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

export default class Home extends Component {
  state = {
    instagramData : []
  }

  componentDidMount() {
    let {context} = this.props;
    context.data.getHomepageInstagramData()
      .then(instadata => {
        let itemarray = []
        instadata.data.forEach(item => 
          itemarray.push(item))
        this.setState({ 
          instagramData : itemarray
        })
      })
    context.actions.setUpcomingEvents();
    document.querySelector('body').setAttribute('class', "landing")
  }

  componentWillUnmount() {
    document.querySelector('body').removeAttribute('class')
  }
  render() {
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
              <SectionEvents upcomingEvents={this.props.context.upcomingEvents[0]}/>
            </FadeInSection>
          </ContentContainer>
          <FadeInSection>
            <Instagram  images={this.state.instagramData}/>
          </FadeInSection>
        </WithGradientBackground>
      </div>
     )
  }
}