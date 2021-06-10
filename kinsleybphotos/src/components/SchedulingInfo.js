import React from 'react'
import Card from 'react-bootstrap/Card'

export default function SchedulingInfo() {
    return (
        <>
            <Card style={{ width: '18rem', height: '500px'}}>
                <Card.Body>
                    <Card.Title>Scheduling info</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Sum up some info about scheduling specifics, 
                        what to expect, 
                        and explain some required information
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}