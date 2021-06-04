import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/container'


export default class HomePage extends Component {

    render() {
        return (
            <div>
                <Jumbotron className="jumbo-1 text-center ">
                    <Container>
                        <h1 className="position-absolute top-50 start-50 translate-middle text-white">Kinsley B Photography</h1>
                     </Container>
                </Jumbotron>
                
            </div>
        )
    }
}
