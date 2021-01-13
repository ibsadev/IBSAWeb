import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import withContext from './Context'

// Components Import
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Events from './components/Events/Events'
import About from './components/About';
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import NotFound from './components/NotFound'
import Footer from './components/Footer/Footer';

// Consumer Components
const SignUpWithContext = withContext(SignUp)
const SignInWithContext = withContext(SignIn)

export default class App extends Component {

  render() {
    return(
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route path = "/events" component={Events} />
            <Route path = "/about" component={About} />
            <Route path = "/signup" component={SignUpWithContext} />
            <Route path = "/signin" component={SignInWithContext} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )}
}
