import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addPhotoshoot} from '../actions/photoshoot'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { BiX } from "react-icons/bi";

class BookingForm extends Component  {

    state = {
        name: "",
        date: this.props.date,
        time: "",
        email: "", 
        cell: "",
        shoot_type: "",
        locations: null, 
        outfits: null, 
        specifics: "",
      }

      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      

    submitForm = event => {    
        event.preventDefault() 

        let formData = this.state
        this.props.addPhotoshoot(formData)
        this.setState({
            name: "",
            date: null,
            time: "",
            email: "", 
            cell: "",
            shoot_type: "",
            locations: null, 
            outfits: null, 
            specifics: "",
        })
    }

    render() {
        return (
          <Container className="booking-form-container fw-bold">
            <br/>
            <Button onClick={this.props.exitForm} className="exit-form-button"><BiX size={20} color="red" /></Button>
            <Form className="booking-form" onSubmit={this.submitForm}>
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="Enter name" onChange={event => this.handleChange(event)} value={this.state.name} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Time</Form.Label>
                        <select className="form-select" name="time" onChange={event => this.handleChange(event)} value={this.state.time}>
                            <option defaultValue>Select desired time range</option>
                            <option value="morning">Morning(7:00am - 10:00am)</option>
                            <option value="afternoon">Afternoon(11:00am - 4:00pm)</option>
                            <option value="night">Evening(5:00pm - sunset)</option>
                        </select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={event => this.handleChange(event)} value={this.state.email}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cellphone</Form.Label>
                    <Form.Control type="cell" name="cell" placeholder="111-222-3333" onChange={event => this.handleChange(event)} value={this.state.cell}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Shoot Type</Form.Label>
                        <select className="form-select" name="shoot_type" onChange={event => this.handleChange(event)} value={this.state.shoot_type}>
                            <option defaultValue>Select desired shoot type</option>
                            <option value="Senior">portraits</option>
                            <option value="Family">Family</option>
                            <option value="Couples">Couples</option>
                            <option value="Children">Children</option>
                        </select>
                </Form.Group>
                <br/>
                <Form.Group onChange={event => this.handleChange(event)} value={this.state.locations}>
                    <Form.Label>Locations </Form.Label><br/>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="locations" id="inlineRadio1" value="1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="locations" id="inlineRadio2" value="2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="locations" id="inlineRadio2" value="3" />
                        <label className="form-check-label" htmlFor="inlineRadio2">3</label>
                    </div>
                </Form.Group>
                <br/>
                <Form.Group onChange={event => this.handleChange(event)} value={this.state.outfits}>
                    <Form.Label>Outfits </Form.Label><br/>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="outfits" id="inlineRadio1" value="1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="outfits" id="inlineRadio2" value="2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="outfits" id="inlineRadio2" value="3" />
                        <label className="form-check-label" htmlFor="inlineRadio2">3</label>
                    </div>
                </Form.Group>
                <br/>
                <Form.Group>
                <Form.Label>Specifics</Form.Label>
                    <Form.Control type="text" size="lg" name="specifics" placeholder="Any extra specifics" onChange={event => this.handleChange(event)} value={this.state.specifics}/>
                </Form.Group>
                <br/>
                <Button type="submit" variant="outline-dark">
                    Submit
                </Button>
            </Form>
          </Container>
        )
    }
}

export default connect(null, {addPhotoshoot})(BookingForm)
 