import React from 'react'
import Container from 'react-bootstrap/Container'


const GalleryBox = (props) =>
  <Container className="text-center">
    <div className="polaroid">
      <a title={props.gal.title}>
        <img height="250" src={props.gal.thumbnail} onClick={() => props.selectGal(props.gal)} id={props.gal.id} alt="gallery-img" title={props.gal.title}/>
      </a>
    </div>
  </Container>
    // <div className="gallery-container">
    //    <img src={props.gal.thumbnail} alt="" className="gallery-image" />
    //    <div className="middle" >
    //      <div className="gallery-text" id={props.gal.id} onClick={() => props.selectGal(props.gal)}>{props.gal.title}</div>
    //    </div> 
    // </div>
  
export default GalleryBox
