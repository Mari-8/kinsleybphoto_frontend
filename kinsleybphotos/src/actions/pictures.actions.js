import { ADD_PICTURE_SUCCESS, ADD_PICTURE_STARTED, ADD_PICTURE_FAILURE } from './types'

const axios = require('axios').default;


export const addPicture = ( picture ) => {
  console.log(picture)
    return dispatch => {
      console.log("HERE")
      dispatch(addPictureStarted());
      console.log("STARTED")
    
      axios
        .post('http://localhost:3001/pictures', {
        picture ,
        completed: false
      })
      .then(res => {
        setTimeout(() => {
          dispatch(addPictureSuccess(res.data));
      }, 2500);
    })
    .catch(err => {
      dispatch(addPictureFailure(err.message));
    });
  }
};

export const addPictureSuccess = picture => ({
  type: ADD_PICTURE_SUCCESS,
  payload: picture
});

export const addPictureStarted = () => ({
  type: ADD_PICTURE_STARTED
});

export const addPictureFailure = error => ({
  type: ADD_PICTURE_FAILURE,
  payload: {
    error
  }
});
            // export function addPicture(picture, gallery) { 
            //     return (dispatch) => {
            //       dispatch({ type: 'START_ADDING_PICTURES_REQUEST' });
            //       fetch('http://localhost:3001/pictures', {
            //         method: "POST",
            //         headers: {
            //             'Accept': 'application/json',
            //             'Content-type': 'application/json'
            //         }, body: JSON.stringify(picture, galId)})
            //         .then(response => response.json())
            //         .then(data => dispatch({ type: 'ADD_PICTURE', data}));
            //     };
            //   } 