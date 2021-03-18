import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import withContext from './Context'

// Components Import
import NewHeader from './components/Header/NewHeader';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import About from './components/AboutUs/About';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import NotFound from './components/NotFound';
import Footer from './components/Footer/Footer';

// Consumer Components
const SignUpWithContext = withContext(SignUp)
const SignInWithContext = withContext(SignIn)
const HomePageWithContext = withContext(Home)
const EventsWithContext = withContext(Events)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: window.innerWidth
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return(
      <Router>
          <NewHeader />
          <Switch>
            <Route exact path = "/" component={HomePageWithContext} />
            <Route path = "/events" component={EventsWithContext} />
            <Route path = "/about" component={About} />
            <Route path = "/signup" component={SignUpWithContext} />
            <Route path = "/signin" component={SignInWithContext} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
      </Router>
    )}
}
