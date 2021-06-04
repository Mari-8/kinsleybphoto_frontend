import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react'; 
import HomePage from './HomePage'
import GalleriesPage from './GalleriesPage'
import BookingPage from './BookingPage' 
import AboutMePage from './AboutMePage'
import Navigation from '../components/Navigation' 

import { BrowserRouter as Router, Route } from 'react-router-dom'; 

class App extends Component {

  render() {
    return (
      <Router> 
        <div>
          <Navigation /> 
          <Route exact path='/' component={HomePage} /> 
          <Route exapt path='/galleries' component={GalleriesPage} />
          <Route exact path='/booking' component={BookingPage} /> 
          <Route exact path='/about' component={AboutMePage} /> 
        </div>
      </Router>
    );
  }
}

export default App;
