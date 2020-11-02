import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components Import
import Header from './components/Header';
import Home from './components/Home/Home';
import Events from './components/Events'
import About from './components/About';
import NotFound from './components/NotFound'
import Footer from './components/Footer';

// // jquery import
// import $ from 'jquery'

// // js import
// require('./js/jquery.min.js')
// require('./js/skel.min.js')
// require('./js/main')
// require('./js/show-on-scroll')
// require('./js/util')


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
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )}

}