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
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

let store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Navigation /> 
            <Route exact path='/' component={HomePage} /> 
            <Route exapt path='/galleries' component={GalleriesPage} />
           <Route exact path='/booking' component={BookingPage} /> 
           <Route exact path='/about' component={AboutMePage} /> 
    </Router>
  </Provider>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
