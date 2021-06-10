import React from 'react'
import GalleryPicture from './GalleryPicture'


export default function Gallery(props) {

    const renderPics = props.pictures.map((pic, index) => <GalleryPicture picture={pic} id={index} />)
    return (
        <div>
            {renderPics}
        </div>
    )
}
