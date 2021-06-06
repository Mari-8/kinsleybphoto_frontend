import React from 'react'


const GalleryBox = (props) =>
    <div className="gallery-container">
       {console.log(props)}
       <img src={props.gal.imageUrl} alt="" className="gallery-image" />
       <div className="middle">
         <div className="gallery-text">{props.gal.title}</div>
       </div> 
    </div>
  
export default GalleryBox
