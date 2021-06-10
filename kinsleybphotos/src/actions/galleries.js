
export const ADD_PICTURES = "ADD_PICTURES";

export const selectGallery = gallery => {
    return {
        type: 'SELECT_GALLERY',
        gallery: gallery
    }
}

export function addImages() {
    console.log("HERE")
    return (dispatch) => {
        fetch('http://localhost:3001/galleries')
        .then(res => res.json())
        .then(images => console.log(images))   //dispatch({ type: 'ADD_IMAGES', images}));
    };
}
