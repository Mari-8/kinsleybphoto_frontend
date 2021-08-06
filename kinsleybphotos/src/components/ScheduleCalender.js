import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Calendar from 'react-calendar';
import BookingForm from './BookingForm'
import { connect } from 'react-redux';
import { addPhotoshoot } from '../actions/photoshoot'
import 'react-calendar/dist/Calendar.css';



class Scheduler extends Component {
      state = {
        name: "",
        date: null,
        time: "",
        email: "", 
        cell: "",
        shootType: "",
        locations: null, 
        outfits: null, 
        specifics: "",
        formActive: false
      }


      renderBookingForm = event => {
        let date = event
        console.log(date)
        this.setState({
          formActive: true,
          date: date
        })
      }

      exitForm = () => {
        this.setState({
          formActive: false
        })
      }

      
  
    render() {
      if (this.state.formActive === true) { 
        return (
          <Container style={{width: '500px', paddingTop: '150px'}} className="scheduling-card">
            <BookingForm 
            formData={this.state}
            handleChange={this.handleChange}
            exitForm={this.exitForm}
            submitForm={this.submitForm}
            date={this.state.date}

            />
          </Container>
        )
      } else {
        return (
          <Container style={{width: '400px'}}>
            <Calendar
              className="calender"
              onClickDay={this.renderBookingForm}
            />
          </Container>
          
        )
      }
    }
}

const mapStateToProps = state => {
  return {
    galleries: state.galleries,
    photoshoots: state.photoshoots
  }
}

  export default connect(mapStateToProps, { addPhotoshoot })(Scheduler)