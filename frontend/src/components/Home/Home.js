import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// Components import
import Banner from './Banner';
import One from './One';
import Two from './Two';
import Instagram from './Instagram';
import './styles.css';

const TITLE = 'IBSA | Home';

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
        <FadeInSection>
          <One />
        </FadeInSection>
        <FadeInSection>
          <Two />
        </FadeInSection>
        <FadeInSection>
          <Instagram  images={this.state.instagramData}/>
        </FadeInSection>
      </div>
     )
  }
}