import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import HomePage from '../src/containers/HomePage'
import GalleriesPage from '../src/containers/GalleriesPage'
import BookingPage from '../src/containers/BookingPage' 
import AboutMePage from '../src/containers/AboutMePage'
import Navigation from '../src/components/Navigation'

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <Navigation /> 
          <Route exact path='/' component={HomePage} /> 
          <Route exapt path='/galleries' component={GalleriesPage} />
          <Route exact path='/booking' component={BookingPage} /> 
          <Route exact path='/about' component={AboutMePage} /> 
  </Router>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
