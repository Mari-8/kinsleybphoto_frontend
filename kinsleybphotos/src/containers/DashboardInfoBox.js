import React, { Component } from 'react'
import AddPhotoBox from '../components/AddPhotoBox'
import { connect } from 'react-redux';

class DashboardInfoBox extends Component {
    render() {
        return (
            <div className="container board-container">
                <div className="row text-center">
                    <div className="col">
                        <br/>
                        <h2>Add Photos</h2>
                        <AddPhotoBox galleries={this.props.galleries}/>
                    </div>
                    <div className="col">
                        <br/>
                        <h2>Manage Bookings</h2>
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