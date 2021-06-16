import React from 'react'


const GalleryBox = (props) =>
    <div className="gallery-container">
       <img src={props.gal.thumbnail} alt="" className="gallery-image" />
       <div className="middle" >
         <div className="gallery-text" id={props.gal.id} onClick={() => props.selectGal(props.gal)}>{props.gal.title}</div>
       </div> 
    </div>
  
export default GalleryBox
