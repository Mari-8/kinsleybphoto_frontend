import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container' 

export default function MainPicture() {
    return (
        <div>
            <Jumbotron className="jumbo-1 text-center ">
                    <Container className="position-absolute top-50 start-50 translate-middle text-white">
                        <h1 className="main-text ">Kinsley B Photography</h1>
                     </Container>
            </Jumbotron>
        </div>
    )
}
