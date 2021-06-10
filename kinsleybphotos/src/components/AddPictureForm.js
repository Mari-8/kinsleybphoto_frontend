import React, { Component } from 'react'
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
//import { addPicture } from '../actions/pictures';

class AddPictureForm extends Component {

    state = {
        src: '', 
        thumbnail: '', 
        gallery_id: this.props.gallery.id,
        thumbnailWidth: undefined, 
        thumbnailHeight: undefined
    }

    handleOnChange = event => {
        console.log(event.target.value)
        this.setState({
                src: event.target.value,
                thumbnail: event.target.value,
                gallery_id: this.props.gallery.id,
                thumbnailWidth: undefined, 
                thumbnailHeight: undefined
            
        })

    }

    handleOnSubmit = event => {
        event.preventDefault()
        const picture = this.state
        this.props.addPic(picture) 
        
        
      }
      
    render() {
   
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <Form.Group controlId=":image" className=":image" >
                    <Form.Label>Select picture to add: </Form.Label>
                    <Form.Control type="file" className=":image" onChange={this.handleOnChange}/>
                </Form.Group>   
                <Button type="submit">Add images</Button>
            </Form>
        )
        
    }
}

//  function mapDispatchToProps(dispatch){
//          return { addPicture: picture => dispatch(addPicture(picture))}
//  }


export default connect(null, null)(AddPictureForm)