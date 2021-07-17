import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import DashboardInfoBox from './DashboardInfoBox'
import Container from 'react-bootstrap/Container'

export default class Dashboard extends Component {
    
    state = {
        loggedIn: true
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

    logout = () => {
        this.setState({
            loggedIn: false
        })
    }

    render() {
        
        if (this.state.loggedIn) {
            return (
                <Container>
                    <DashboardInfoBox logout={this.logout} />
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
