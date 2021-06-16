import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function SchedulingInfo() {
    return (
        <Container>
            <Card style={{ width: '18rem', height: '520px'}} className="scheduling-card">
                <Card.Body className="text-center">
                    <Card.Text>
                        Pick a date, and fill out the form as well as you can. 
                        Its okay to not be completely sure on all of the information, 
                        this will just give me a general idea of what you are looking for. 
                        Once submitted I will contact you within 1-2 business days to finalize details!
                    </Card.Text>
                    <hr className="line-nav" />
                    <Card.Subtitle className="text-muted">Base pricing</Card.Subtitle>
                    <Card.Text>
                        Portraits: $150<br/>
                        Couples: $150<br/>
                        Children: $175<br/>
                        Family: $200
                    </Card.Text>
                    <Card.Text>
                        These are base prices, depending on locations, outfits, and any other variables the final price may change. 
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
