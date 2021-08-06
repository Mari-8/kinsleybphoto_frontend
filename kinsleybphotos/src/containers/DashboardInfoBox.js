import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import AddPhotoBox from '../components/AddPhotoBox'
import ManageBookings from '../components/ManageBookings'
import { connect } from 'react-redux';

class DashboardInfoBox extends Component {
    render() {
        return (
            <div className="container board-container">
                <div className="row text-center">
                    <Button className="logout-button" variant="outline-dark" onClick={this.props.logout}>Logout</Button>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <br/>
                        <h2>Add Photos</h2>
                        <AddPhotoBox galleries={this.props.galleries}/>
                    </div>
                    <div className="col">
                        <br/>
                        <h2>Manage Bookings</h2>
                        <ManageBookings /> 
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      galleries: state.galleries,
      photoshoots: state.photoshoots
    }
}


export default connect(mapStateToProps, null)(DashboardInfoBox)