    const initialState = {
        loading: false,
        photoshoots: [],
        error: null
    };

  export default function photoshootReducer(state = initialState, action)  {
   
    switch (action.type) { 

        case 'ADD_PHOTOSHOOT_STARTED': 
        
        return {
            ...state, 
            loading: true
        }
        
        case 'ADD_PHOTOSHOOT_SUCCESS': 
        
        return {
            ...state,
            loading: false,
            photoshoots: state.photoshoots.concat(action.payload)
        }
    
        case 'ADD_PHOTOSHOOT_FAILURE': 
        return {
            ...state,
            error: action.payload.error
        }

        case 'LOADING_PHOTOSHOOTS': 
        return {
            ...state,
             loading: true
        }

        case 'PHOTOSHOOTS_LOADED': 
        
        return {
            ...state,
            loading: false,
            photoshoots: action.payload
        }

        case 'DELETING_PHOTOSHOOT': 
        
        return {
            ...state,
            loading: true, 
            photoshoots: state.photoshoots
        }

        case 'PHOTOSHOOT_DELETED': 
       
        return {
            ...state,
            photoshoots: [...state.photoshoots.data.data.filter(shoot => `${shoot.id}` !== action.payload)],
            loading: false
        }

        default: 
        return state
    }
  }