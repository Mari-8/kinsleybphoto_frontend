import React, { Component } from 'react'
import Scheduler from '../components/ScheduleCalender'
import SchedulingInfo from '../components/SchedulingInfo'
import SchedulingExamples from '../components/SchedulingExamples'
import PricingCard from '../components/PricingCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'



export default class BookingPage extends Component {

    

    render() {
        return (
            <Container className="booking-container">
                <Row className="booking-row">
                  <Col className="justify-content-md-center">
                    <SchedulingInfo />
                  </Col>

                  <Col>
                    <Scheduler />
                  </Col>

                  <Col>
                    <SchedulingExamples />
                  </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <PricingCard /> 
                    </Col>
                </Row>
            </Container>
        )
    }
}
