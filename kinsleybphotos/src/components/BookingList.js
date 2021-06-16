import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPhotoshoots, deletePhotoshoot } from '../actions/photoshoot'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { BiX } from "react-icons/bi";

class BookingList extends Component {

    state = {
        toggleList: false
    }

    getPhotoshoots = () => {
        this.props.getPhotoshoots() 
        setTimeout(() => {
            this.setState({
                toggleList: true
            })
        }, 2500)
    }
    
    deleteShoot = event => {
        let shootId = event.target.id
        this.props.deletePhotoshoot(shootId)
    }
    
    render() {
        console.log(this.props)

        if (this.state.toggleList === false) {
            return (
                <Container className="booking-list-container text-center">
                    <Button variant="outline-dark"  onClick={this.getPhotoshoots}>Get photoshoots</Button>
                    
                </Container>
            )
        } else {
            return (
                <Container className="booking-list-container text-center">
                    <ul className="top-padding">
                        {this.props.photoshoots.photoshoots.data.data.map(shoot => <li>{shoot.attributes.name}<Button variant="outline-dark" id={shoot.id} onClick={event => this.deleteShoot(event)}><BiX size={15} color="red" /></Button></li>)}
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