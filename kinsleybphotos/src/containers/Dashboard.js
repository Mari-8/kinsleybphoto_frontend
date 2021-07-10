import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import DashboardInfoBox from '../components/DashboardInfoBox'
import Container from 'react-bootstrap/Container'

export default class Dashboard extends Component {
    
    state = {
        loggedIn: false
    }

    loginAttempt = (info) => {
        if (info.username === "kinsleybwelk" && info.password === "KinsleyAltimari8") {
            this.setState({
                loggedIn: true
            })
        } else {
            alert("Incorrect username or password")
        }
    }

    render() {
        
        if (this.state.loggedIn) {
            return (
                <Container>
                    <DashboardInfoBox />
                </Container>
            )
        } else {
            return (
                <Container>
                    <LoginForm submitLogin={this.loginAttempt} /> 
                </Container>
            )
        }
    }
}
