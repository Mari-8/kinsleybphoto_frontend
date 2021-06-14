import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function SchedulingExamples() {
    return (
        <Container className="content-card-right">
            <Card style={{ width: '18rem', height: '500px'}}>
                <Card.Body>
                    <Card.Title>Scheduling Examples</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        explain options for photoshoot type, 
                        types of locations, 
                        explain how time management works during the shoot
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
