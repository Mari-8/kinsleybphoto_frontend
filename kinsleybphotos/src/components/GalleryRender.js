import Gallery from 'react-grid-gallery';
import { connect } from 'react-redux';
import React, { Component } from 'react'
import { getPictures } from '../actions/pictures'

class GalleryRender extends Component {

    componentDidMount(){
        this.props.getPictures()
      }

    onSelectImage = (event) => {
        console.log(event) 
    }
    
    render() {
        let images = []
        if (this.props.pictures) {
            this.props.pictures.filter(picture => picture.gallery_id === this.props.galId).map(pic => {
            return images.push({src: pic.src, thumbnail: pic.thumbnail, thumbnailWidth: undefined, thumbnailHeight: undefined})
          })
        }
        console.log(images)
        return (
          
            <div>
              <Gallery  images={images} rowHeight={250} onSelectImage={ event => this.onSelectImage(event)}/>  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      selectedGallery: state.selectedGallery,
      pictures: state.pictures.pictures
    }
}

export default connect(mapStateToProps, { getPictures })(GalleryRender)