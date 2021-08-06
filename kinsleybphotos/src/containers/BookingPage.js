import React, { Component } from 'react'
import Scheduler from '../components/ScheduleCalender'
import SchedulingInfo from '../components/SchedulingInfo'
import SchedulingExamples from '../components/SchedulingExamples'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import BookingList from '../components/BookingList'
import Container from 'react-bootstrap/Container'



export default class BookingPage extends Component {

   
    state = {
        buttonToggle: false
    }

    toggleButtonOn = () => {
        this.setState({
            buttonToggle: true
        })
    }

    toggleButtonOff = () => {
        this.setState({
            buttonToggle: false
        })
    }

    render() {

        if (this.state.buttonToggle === true) {
            return (
        <>

            <Jumbotron className="jumbo-booking booking-background">
                <Container className="position-absolute top-50 start-50 translate-middle top-padding">
                    <div className="row">
                         <div className="col">
                            <SchedulingInfo />
                        </div>
                        <div className="col-5">
                            <BookingList exitList={this.toggleButtonOff} />
                        </div>
                        <div className="col">
                            <SchedulingExamples />
                        </div>
                    </div>

                </Container>
                
              </Jumbotron>
                
        </>
            )
        } else {
            return (
              <Jumbotron className="jumbo-booking booking-background">
                  <Button variant="outline-dark" className="position-absolute top-100 start-50 translate-middle top-padding" onClick={this.toggleButtonOn}>List bookings</Button>
                <Container className="position-absolute top-50 start-50 translate-middle top-padding">
                    <div className="row">
                         <div className="col">
                            <SchedulingInfo />
                        </div>
                        <div className="col-5">
                            <Scheduler />
                        </div>
                        <div className="col">
                            <SchedulingExamples className="examples"/>
                        </div>
                    </div>

                </Container>
               
              </Jumbotron>
            )
        }
    }
}
