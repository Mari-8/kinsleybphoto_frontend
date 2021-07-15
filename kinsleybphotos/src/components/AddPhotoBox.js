import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import AddPictureForm from './AddPictureForm'

export default class AddPhotoBox extends Component {
   
        state = {
            selectedGal: undefined
        }

        setSelected = (galId) => {
            this.setState({
                selectedGal: galId
            })
            console.log(this.state)
        }

        listGalleries = () => {
            return this.props.galleries.galleries.map(gal => <div id={gal.id} className="list-blocks">{gal.title}<Button className="check-buttons" type="radio" onClick={() => this.setSelected(gal.id)} /></div>)
        }

        goBack = () => {
            this.setState({
                selectedGal: undefined
            })
        }

        render() {

            if (this.state.selectedGal) {
                return (
                    <div>
                        <ul className="text-center">
                            <Button variant="outline-dark" onClick={this.goBack}>Back</Button>
                        </ul>
                        <br/>
                        <br/>
                        <AddPictureForm galId={this.state.selectedGal} />
                    </div>
                )
            } else {
                return (
                    <div>
                        <ul className="text-center">
                            {this.listGalleries()}
                        </ul>
                        <br/>
                    </div>
                )
            }
        }
    
}

