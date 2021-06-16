import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import GalleryBox from '../components/GalleryBox'
import { connect } from 'react-redux';
import { selectGallery, getGalleries } from '../actions/galleries'
import { getPictures } from '../actions/pictures'
import Jumbotron from 'react-bootstrap/Jumbotron'
import GalleryRender from '../components/GalleryRender'
import AddPictureForm from '../components/AddPictureForm'


class GalleriesPage extends Component {

  
    componentDidMount(){
        this.props.getPictures()
    }


    
   render() {
   
  
    const getGalleries = this.props.galleries.galleries.map((gallery, index) => <Col>< GalleryBox id={index} gal={gallery} selectGal={this.props.selectGallery} /></Col>)

        if (this.props.galleries.selectedGallery) {
                return (
                    <Jumbotron className="gallery-pics text-center">
                        <h1>{this.props.galleries.selectedGallery.title}</h1>
                        <AddPictureForm gallery={this.props.galleries.selectedGallery} />  
                        <br/>
                        <GalleryRender galId={this.props.galleries.selectedGallery.id} /> 
                    </Jumbotron>
                )
        } else {
            
            return (
                <div className="text-center">
                        <Row className="justify-content-md-center galleries-container">
                        {getGalleries} 
                    </Row>
                </div>
            )
                
            
        }
    }
}

const mapStateToProps = state => {
    return {
      galleries: state.galleries,
      selectedGallery: state.selectedGallery,
      pictures: state.pictures,
      photoshoots: state.photoshoots
    }
}




export default connect(mapStateToProps, {selectGallery, getPictures, getGalleries })(GalleriesPage)