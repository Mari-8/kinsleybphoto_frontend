import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import GalleryBox from '../components/GalleryBox'
import { connect } from 'react-redux';
import { selectGallery } from '../actions/galleries'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Gallery from 'react-grid-gallery';
import AddPictureForm from '../components/AddPictureForm'
import { addPicture } from '../actions/pictures.actions'


class GalleriesPage extends Component {

    //create component to add carousel item based on existing galleries
    // use props to pass down all galleries to create individual carousel items

    // zenfolio for image sourcing?

    // state = {
    //     galleries: [
    //         {id: 1, imageUrl: "/assets/images/kins-portrait.png", title: "Couples", pictures: [
    //             {src: '/assets/images/IMG_1276.JPG', thumbnail: '/assets/images/IMG_1276.JPG', thumbnailWidth: undefined, thumbnailHeight: undefined},
    //             {src: '/assets/images/IMG_1347.JPG', thumbnail: '/assets/images/IMG_1347.JPG', thumbnailWidth: undefined, thumbnailHeight: undefined},
    //             {src: '/assets/images/IMG_1490.JPG', thumbnail: '/assets/images/IMG_1490.JPG', thumbnailWidth: undefined, thumbnailHeight: undefined},
    //             {src: '/assets/images/IMG_1491_1_Original.jpg', thumbnail: '/assets/images/IMG_1491_1_Original.jpg', thumbnailWidth: undefined, thumbnailHeight: undefined},
    //             {src: '/assets/images/2459FC5F-156A-4D37-8400-345B122B721E.JPG', thumbnail: '/assets/images/2459FC5F-156A-4D37-8400-345B122B721E.JPG', thumbnailWidth: undefined, thumbnailHeight: undefined},
    //             {src: '/assets/images/6885ECE4-7BDD-4666-813B-3958CA2813C4.JPG', thumbnail: '/assets/images/6885ECE4-7BDD-4666-813B-3958CA2813C4.JPG', thumbnailWidth: undefined, thumbnailHeight: undefined}
    //         ]
    //         },
    //         {id: 2, imageUrl: "/assets/images/IMG_9753.JPG", title: "Family"}, 
    //         {id: 3, imageUrl: "/assets/images/IMG_7420.JPG", title: "Street"},
    //         {id: 4, imageUrl: "/assets/images/IMG_1724.JPG", title: "Senior Pictures"}
    //     ]
    // }

   render() {
    
        const getGalleries = this.props.galleries.galleries.map((gallery, index) => <Col>< GalleryBox id={index} gal={gallery} selectGal={this.props.selectGallery} /> </Col>) 
    
            if (this.props.galleries.selectedGallery) {
                return (
                    <Jumbotron className="gallery-pics text-center">
                        <h1>{this.props.galleries.selectedGallery.title}</h1>
                         <AddPictureForm gallery={this.props.galleries.selectedGallery} addPic={ addPicture } />  
                        <Gallery images={this.props.galleries.selectedGallery.images} rowHeight={300}/> 
                    </Jumbotron>
                )
        } else {
            return (
                <Row className="justify-content-md-center galleries-container">
                   {getGalleries} 
                </Row>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
      galleries: state.galleries,
      selectedGallery: state.selectedGallery,
      pictures: state.pictures
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addPicture: picture => {
        dispatch(addPicture(picture))
    },
    selectGallery: gallery => {
        dispatch(selectGallery(gallery))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GalleriesPage)