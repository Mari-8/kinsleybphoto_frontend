

const axios = require('axios').default;


export const addPicture = ( picture ) => {
  
    return (dispatch) => {
      dispatch({ type: 'ADD_PICTURE_STARTED' })
      
      axios
        .post('http://localhost:3001/pictures', {
          picture,
          completed: false
        })
      .then(res => {
        setTimeout(() => {
          dispatch({type: 'ADD_PICTURE_SUCCESS', payload: res.data});
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: 'ADD_PICTURE_FAILURE', payload: err.message });
    });
  }
};

export const getPictures = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_PICTURES"})
    axios 
      .get('http://localhost:3001/pictures')
      .then(res => res)
      .then(pictures => dispatch({
        type: "PICTURES_LOADED",
        payload: pictures
      }))
      
  }
}

export const getGalleryPictures = (galId) => {
  return (dispatch) => {
    dispatch({type: "LOADING_PICTURES"})
    axios.get(`http://localhost:3001/galleries/${galId}/pictures`)
        .then(res => res)
        .then(pictures => pictures)
  }
}

