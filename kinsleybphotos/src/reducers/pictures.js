
import {
    ADD_PICTURE_SUCCESS,
    ADD_PICTURE_STARTED,
    ADD_PICTURE_FAILURE
  } from '../actions/types';

  const initialState = {
    loading: false,
    pictures: null,
    error: null
  };


export default function picturesReducer(state = initialState, {type, payload}) {

    switch (type) {

        case ADD_PICTURE_STARTED:
            console.log(" IN ADD PICS STARTED")
            return {
                ...state, 
                loading: true,
                pictures: null,
                error: null
            }

        case ADD_PICTURE_SUCCESS:
            console.log("IN SUCCESS")
            return {
                ...state, 
                loading: false,
                error: null,
                pictures: payload
            }

        case ADD_PICTURE_FAILURE: 
        console.log("IN PICTURE FAIL")
        return {
            ...state,
            loading: false,
            error: payload.error
        }

        default: 
            return state;
    }
}



