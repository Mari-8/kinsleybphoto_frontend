import React, { Component } from 'react'
import Container from 'react-bootstrap/container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class GalleriesPage extends Component {
    render() {
        return (
            <div>
                
                <Container fluid >
                    <Row>
                        <Col>
                            <p>Hello first row</p>
                        </Col>
                        <Col>
                            <p>Another column first row</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Hello second row</p>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        )
    }
}
