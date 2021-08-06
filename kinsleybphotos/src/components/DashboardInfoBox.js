import React, { Component } from 'react'

export default class DashboardInfoBox extends Component {
    render() {
        return (
            <div className="container board-container">
                <div className="row text-center">
                    <div className="col">
                        <br/>
                        <h2>Add Photos</h2>
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
