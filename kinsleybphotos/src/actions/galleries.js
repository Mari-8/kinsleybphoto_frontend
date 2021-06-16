const axios = require('axios').default;


export const selectGallery = gallery => {
    return {
        type: 'SELECT_GALLERY',
        gallery: gallery
    }
}

export const addGallery = (gallery) => {

    return (dispatch) => {
        dispatch({ type: 'ADD_GALLERY_STARTED' })
        console.log("STARTED")
        axios
          .post('http://localhost:3001/galleries', {
            gallery,
            completed: false
          })
        .then(res => {
          setTimeout(() => {
            dispatch({type: 'ADD_GALLERY_SUCCESS', payload: res.data});
        }, 1500);
      })
      .catch(err => {
        dispatch({ type: 'ADD_GALLERY_FAILURE', payload: err.message });
      });
    }
}
export const getGalleries = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_GALLERIES"})
      axios 
        .get('http://localhost:3001/galleries')
        .then(res => res)
        .then(galleries => dispatch({
          type: "GALLERIES_LOADED",
          payload: galleries
        }))
        
    }
  }

