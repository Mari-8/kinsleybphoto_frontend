function galleriesReducer(state = {
    loading: false,
    galleries : [
        {id: 16, thumbnail: "/assets/images/couple_bg.JPG", title: "Couples"},
        {id: 17, thumbnail: "/assets/images/cason_bg.JPG", title: "Children"}, 
        {id: 18, thumbnail: "/assets/images/fam_bg.JPG", title: "Family"},
        {id: 19, thumbnail: "/assets/images/portrait_bg.JPG", title: "Portraits"}],
    selectedGallery: null
}, action) {

    switch (action.type) {
      case "ADD_GALLERY_STARTED":
        return {
          ...state,
          loading: true,
          galleries: [...state.galleries]
        }

      case "ADD_GALLERY_SUCCESS":
        return {
          ...state, 
          loading: false,
          galleries: [...state.galleries]
        };

       case "LOADING_GALLERIES": 
        return {
          ...state, 
          loading: true,
          galleries: [...state.galleries]
        }

      case "GALLERIES_LOADED":
        return {
          ...state,
          loading: false, 
          galleries: action.payload
        }

      case "SELECT_GALLERY": 
        let selectedGal = action.gallery
        return { ...state, selectedGallery: selectedGal }
          
      default:
        return state;
    }
  } 

  export default galleriesReducer

