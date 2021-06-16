import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


export default class Navigation extends Component {
    render() {
        return (
            <div>
              <hr className="line-nav" />
                <Container className="d-flex justify-content-center">
                    <Navbar className="" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/galleries">Galleries</Nav.Link>
                            </Nav>
                            <h3 href="/">Kinsley B Photo</h3>
                            <Nav>
                                <Nav.Link href="/booking">Booking</Nav.Link>
                                <Nav.Link href="/about">About Me</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
                <hr className="line-nav"/>
            </div>
            
        )
    }
}
