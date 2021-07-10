import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

export default class Dashboard extends Component {
    
    state = {
        loggedIn: false
    }

    render() {
        
        if (this.state.loggedIn) {
            return (
                <Container>
                    <h1>Dashboard</h1>
                </Container>
            )
        } else {
            return (
                <Container>
                    <h1>Login form</h1>
                </Container>
            )
        }
    }
}
