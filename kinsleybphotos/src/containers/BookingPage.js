import React, { Component } from 'react'
import Scheduler from '../components/ScheduleCalender'
import SchedulingInfo from '../components/SchedulingInfo'
import SchedulingExamples from '../components/SchedulingExamples'
import Row from 'react-bootstrap/Row'

export default class BookingPage extends Component {
    render() {
        return (
            <Row className="justify-content-center">
                <SchedulingInfo />

                <Scheduler />

                <SchedulingExamples /> 
            </Row>
        )
    }
}
