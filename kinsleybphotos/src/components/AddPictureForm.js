import React, { Component } from 'react'
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { addPicture } from '../actions/pictures';


const axios = require('axios').default;

class AddPictureForm extends Component {
  
    state = {
        src: '', 
        thumbnail: '', 
        gallery_id: this.props.gallery.id,
        thumbnailWidth: undefined, 
        thumbnailHeight: undefined,
        image: null
    }

    handleOnChange = event => {
        const formData = new FormData() 
        formData.append("file", event.target.files[0])
        formData.append("upload_preset", "dxdxddm4")

        this.setState({
                formData: formData,
                gallery_id: this.props.gallery.id,
                thumbnailWidth: undefined, 
                thumbnailHeight: undefined
        })

    }

    handleOnSubmit = event => {
        event.preventDefault()

        axios.post("https://api.cloudinary.com/v1_1/kinsleybphoto/image/upload", this.state.formData).then(res => {
            this.setState({
                formData: null, 
                src: res.data.url, 
                thumbnail: res.data.url, 
            })
        })

        setTimeout(() => {
            const pictureProps = this.state
            this.props.addPicture(pictureProps) 
        }, 2500)
       
        
      }
      
    render() {
      
   
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <Form.Group htmlFor=":image" name=":image" >
                    <Form.Label>Select picture to add: </Form.Label>
                    <Form.Control type="file" name="file" className=":image" onChange={this.handleOnChange}/>
                </Form.Group>   
                <Button type="submit">Add image</Button>
            </Form>
        )
        
    }
}


export default connect(null, { addPicture })(AddPictureForm)