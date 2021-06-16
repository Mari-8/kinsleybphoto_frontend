import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addGallery } from '../actions/galleries'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class NewGalleryForm extends Component {
    
    state = {
        thumbnail: '',
        title: '',
        description: ''
    }
    
    handleOnSubmit = event => {
        event.preventDefault()

        let formData = this.state
        console.log(formData)
        this.props.addGallery(formData)
    
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleThumbnailChange = event => {
        this.setState({
            thumbnail: `/assets/images/${event.target.files[0].name}`
        })
    }

    render() {
        return (
          <Container>
            <Form onSubmit={this.handleOnSubmit}>
            
                <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Select thumbnail: </Form.Label>
                    <Form.Control type="file" name="thumbnail" onChange={this.handleThumbnailChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" onChange={this.handleChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" onChange={this.handleChange}></Form.Control>
                </Form.Group><br/>
                <Button type="submit">Add Gallery</Button>
            </Form>
          </Container>
        )
    }
}

export default connect(null, {addGallery})(NewGalleryForm)
