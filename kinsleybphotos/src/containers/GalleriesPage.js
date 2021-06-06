import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import GalleryBox from '../components/GalleryBox'

export default class GalleriesPage extends Component {

    //create component to add carousel item based on existing galleries
    // use props to pass down all galleries to create individual carousel items

    state = {
        galleries: [
            {id: 1, imageUrl: "/assets/images/kins-portrait.png", title: "Couples"},
            {id: 2, imageUrl: "/assets/images/IMG_9753.JPG", title: "Family"}, 
            {id: 3, imageUrl: "/assets/images/IMG_7420.JPG", title: "Street"},
            {id: 4, imageUrl: "/assets/images/IMG_1724.JPG", title: "Senior Pictures"}
        ]
    }


   
   render() {
       
       const getGalleries = this.state.galleries.map(gallery => <Col>< GalleryBox gal={gallery} /> </Col>) 

        return (
            <Row className="justify-content-md-center galleries-container">
                {getGalleries} 
            </Row>
        )
    }
}
