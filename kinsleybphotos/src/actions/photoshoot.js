const axios = require('axios').default;

export const addPhotoshoot = ( photoshoot ) => {
 
    return (dispatch) => {
      dispatch({ type: 'ADD_PHOTOSHOOT_STARTED' })
  
      axios
        .post('http://localhost:3001/photoshoots', {
          photoshoot,
          completed: false
        })
      .then(res => {
        setTimeout(() => {
          dispatch({type: 'ADD_PHOTOSHOOT_SUCCESS', payload: res.data});
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: 'ADD_PHOTOSHOOT_FAILURE', payload: err.message });
    });
  }
};

export const getPhotoshoots = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_PHOTOSHOOTS"})
    axios 
      .get('http://localhost:3001/photoshoots')
      .then(res => res)
      .then(photoshoots => dispatch({
        type: "PHOTOSHOOTS_LOADED",
        payload: photoshoots
      }))
      
  }
}

export const deletePhotoshoot = (shootId) => {
  let id = shootId
  return (dispatch)=> {
    dispatch({ type: "DELETING_PHOTOSHOOT" })
    let configObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    console.log(id)
    fetch(`http://localhost:3001/photoshoots/` + id, configObj)
    .then(res => res)
    .then(res => dispatch({
        type: "PHOTOSHOOT_DELETED", payload: id
        }))
  }
}


// return (dispatch) => {
//   console.log(id)
//   dispatch({ type: "DELETING_PHOTOSHOOT" })
//   axios 
//   .post('http://localhost:3001/photoshoots/'+id, {
//     _method: 'DELETE'
//   })
//   .then(res => res) 
//   .then(res => dispatch({
//     type: "PHOTOSHOOT_DELETED", 
//     payload: id
//   }));
// }