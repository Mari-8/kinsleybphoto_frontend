import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function SchedulingExamples() {
    return (
        <Container className="scheduling-card-right">
            <Card style={{ width: '18rem', height: '520px'}} className="scheduling-card">
                <Card.Body className="text-center">
                    <Card.Text>
                        My goal is to give you the best photo experience possible, and have as much fun as possible. 
                        We will take as long as we need, I will never cut a shoot short because of a strict time limit.
                        I will send you ALL of the photos that turn out great, you can expect to recieve anywhere from 30-60 
                        pictures that I manually edit and put my creative touch on!
                    </Card.Text>
                    <hr className="line-nav" />
                    <Card.Text>
                        I currently do shoots on Tuesday, Thursdays, and Saturdays. You can request a day other than one of those, 
                        but there is no garuntee I can fit it in. Once requested, I will contact you and we can find the next available time to 
                        work with!
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
