import React, { Component } from 'react';

// Components import
import Banner from './Banner'
import One from './One'
import Two from './Two'
import Instagram from './Instagram'
import './styles.css'

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
  componentDidMount() {
    let {context} = this.props;
    context.data.getHomepageInstagramData();
    document.querySelector('body').setAttribute('class', "landing")
  }

  componentWillUnmount() {
    document.querySelector('body').removeAttribute('class')
  }
  render() {
     return (
       <div>
        <Banner />
        <FadeInSection>
          <One />
        </FadeInSection>
        <FadeInSection>
          <Two />
        </FadeInSection>
        <FadeInSection>
          <Instagram />
        </FadeInSection>
      </div>
     )
  }
}