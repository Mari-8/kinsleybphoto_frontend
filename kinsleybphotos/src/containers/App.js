import '../App.css';
import React, { Component } from 'react'; 
import HomePage from './HomePage'
import GalleriesPage from './GalleriesPage'
import BookingPage from './BookingPage' 
import AboutMePage from './AboutMePage'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  

  render() {
    return (
      <Router>
        <Navigation /> 
          <Route exact path='/' component={HomePage} /> 
          <Route exact path='/galleries' component={GalleriesPage} />
          <Route exact path='/booking' component={BookingPage} /> 
          <Route exact path='/about' component={AboutMePage} /> 
        <Footer/>
    </Router>
    );
  }
}

export default App;
