import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IntroCard from '../components/IntroCard'
import HobbyCard from '../components/HobbyCard'


export default class AboutMePage extends Component {
    render() {
        return (
            <Jumbotron className="about-me-background">
                <Container className="about-me-container">
                    <Row>
                        <Col>
                            <IntroCard /> 
                        </Col>
                    </Row>
                    <Row className="top-padding-more">
                        <Col>
                            <HobbyCard /> 
                        </Col>
                    </Row>
                    <Row className="top-padding-more">
                       
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}
