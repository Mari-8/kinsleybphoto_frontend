

  const initialState = {
    loading: false,
    pictures: null,
    galPictures: null,
    error: null
  };


export default function picturesReducer(state = initialState, action)  {

    switch (action.type) {

        case 'ADD_PICTURE_STARTED':
         
            return {
                ...state, 
                loading: true,
                pictures: state.pictures,
                error: null
            }

        case 'ADD_PICTURE_SUCCESS':
          
            return {
                ...state, 
                loading: false,
                error: null,
                pictures: [...state.pictures, action.payload]
            }

        case 'ADD_PICTURE_FAILURE': 
      
        return {
            ...state,
            loading: false,
            error: action.payload.error
        }

        case 'GALLERY_PICTURES': 
    
        return {
            ...state, 
            pictures: action.payload
        }
        case 'LOADING_PICTURES': 

        return {
            ...state, 
            loading: true
        }

        case 'GAL_PICTURES_LOADED': 
       
        console.log(action.payload)
        return {
            galPictures: action.payload
        }
        case 'PICTURES_LOADED': 
        
        return {
            ...state,
            loading: false, 
            pictures: action.payload.data
        }

        default: 
            return state;
    }
}



