import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPhotoshoots, deletePhotoshoot } from '../actions/photoshoot'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { BiX } from "react-icons/bi";

class BookingList extends Component {

    state = {
        toggleList: false,
        searchValue: ""
    }

    getPhotoshoots = () => {
        this.props.getPhotoshoots() 
        setTimeout(() => {
            this.setState({
                toggleList: true
            })
        }, 2500)
    }

    searchBookings = (event) => {
        this.setState({
            searchValue: event.target.value
        })

    }
<<<<<<< HEAD

    filterResult = (event) => {
        event.preventDefault()
        
        return this.props.photoshoots.photoshoots.data.data.filter(shoot => shoot.attributes.name === this.state.searchValue)
    }

=======
>>>>>>> 9b3d4060449852dfac92b5e9acfa57e84b1aa4d3
    
    deleteShoot = event => {
        let shootId = event.target.id
        this.props.deletePhotoshoot(shootId)
    }
    
    render() {

        if (this.state.toggleList === false) {
            return (
                <Container className="booking-list-container text-center">
<<<<<<< HEAD
                    <br/>
                    <Button onClick={this.props.exitList} className="exit-form-button"><BiX size={20} color="red" /></Button>
                    <br/><br/>
=======
                    {/* <Button onClick={this.props.exitList} className="exit-form-button"><BiX size={20} color="red" /></Button> */}
                    <br/>
>>>>>>> 9b3d4060449852dfac92b5e9acfa57e84b1aa4d3
                    <Button variant="outline-dark"  onClick={this.getPhotoshoots}>Get photoshoots</Button>
                    
                </Container>
            )
        } else {
            return (
                <Container className="booking-list-container text-center">
<<<<<<< HEAD
                    <br/> 
                    <input type="text" name="search" value={this.state.searchValue} onChange={event => this.searchBookings(event)} /><br/>
                    <button type="submit" onClick={event => this.filterResult(event)}for="search">Search</button>
                    <br/>
                    <br/>
                    <Button onClick={this.props.exitList} className="exit-form-button"><BiX size={20} color="red" /></Button>
                    <br/>
                    <ul className="top-padding">
                        {this.props.photoshoots.photoshoots.data.data.map(shoot => <li>{shoot.attributes.name}<Button variant="outline-dark" id={shoot.id} onClick={event => this.deleteShoot(event)}><BiX size={15} color="red" /></Button></li>)}
=======
                    <ul className="photoshoot-list">
                        {this.props.photoshoots.photoshoots.data.data.map(shoot => <div>{shoot.attributes.name}<Button className="mx-3" variant="outline-dark" id={shoot.id} onClick={event => this.deleteShoot(event)}><BiX size={15} color="red" /></Button></div>)}
>>>>>>> 9b3d4060449852dfac92b5e9acfa57e84b1aa4d3
                    </ul>
                </Container>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
      photoshoots: state.photoshoots,
      galleries: state.galleries
    }
}

export default connect(mapStateToProps, { getPhotoshoots, deletePhotoshoot })(BookingList)