    const initialState = {
        loading: false,
        photoshoots: [],
        error: null
    };

  export default function photoshootReducer(state = initialState, action)  {
   
    switch (action.type) { 

        case 'ADD_PHOTOSHOOT_STARTED': 
        
        return {
            
            loading: true,
            photoshoots: state.photoshoots
        }
        
        case 'ADD_PHOTOSHOOT_SUCCESS': 
        
        return {
           
            loading: false,
            photoshoots: state.photoshoots.concat(action.payload)
        }
    
        case 'ADD_PHOTOSHOOT_FAILURE': 
        return {
            
            error: action.payload.error
        }

        case 'LOADING_PHOTOSHOOTS': 
        return {
             loading: true
        }

        case 'PHOTOSHOOTS_LOADED': 
        console.log("LOADED")
        return {
            loading: false,
            photoshoots: action.payload
        }

        case 'DELETING_PHOTOSHOOT': 
        console.log("DELETING") 
        return {
            loading: true, 
            photoshoots: state.photoshoots
        }

        case 'PHOTOSHOOT_DELETED': 
        console.log("DELETED")
        console.log(action) 
        return {
            loading: false, 
            photoshoots: state.photoshoots.filter(shoot => shoot.id !== action.payload)
        }

        default: 
        return state
    }
  }