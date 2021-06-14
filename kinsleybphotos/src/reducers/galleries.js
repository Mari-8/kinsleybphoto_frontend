function galleriesReducer(state = {
    galleries : [{id: 1, imageUrl: "/assets/images/kins-portrait.png", title: "Couples", images: [ 
    {src: '/assets/images/IMG_1276.JPG', thumbnail: '/assets/images/IMG_1276.JPG', thumbnailWidth: undefined, thumbnailHeight: undefined},
    {src: '/assets/images/IMG_1347.JPG', thumbnail: '/assets/images/IMG_1347.JPG', thumbnailWidth: undefined, thumbnailHeight: undefined},
    {src: '/assets/images/IMG_1490.JPG', thumbnail: '/assets/images/IMG_1490.JPG', thumbnailWidth: undefined, thumbnailHeight: undefined},
    {src: '/assets/images/IMG_1491_1_Original.jpg', thumbnail: '/assets/images/IMG_1491_1_Original.jpg', thumbnailWidth: undefined, thumbnailHeight: undefined},
  ] },
    {id: 2, imageUrl: "/assets/images/IMG_9753.JPG", title: "Family"}, 
    {id: 3, imageUrl: "/assets/images/IMG_7420.JPG", title: "Street"},
    {id: 4, imageUrl: "/assets/images/IMG_1724.JPG", title: "Senior Pictures"}
],
    selectedGallery: null
}, action) {

    switch (action.type) {
      case "ADD_GALLERY":
        return [...state, action.gallery];

      case "SELECT_GALLERY": 
        let selectedGal = action.gallery
        return { ...state, selectedGallery: selectedGal }
          
      default:
        return state;
    }
  } 

  export default galleriesReducer


//   {src: '/assets/images/IMG_1276.JPG', thumbnail: '/assets/images/IMG_1276.JPG', thumbnailWidth: undefined, thumbnailHeight: undefined},
//   {src: '/assets/images/IMG_1347.JPG', thumbnail: '/assets/images/IMG_1347.JPG', thumbnailWidth: undefined, thumbnailHeight: undefined},
//   {src: '/assets/images/IMG_1490.JPG', thumbnail: '/assets/images/IMG_1490.JPG', thumbnailWidth: undefined, thumbnailHeight: undefined},
//   {src: '/assets/images/IMG_1491_1_Original.jpg', thumbnail: '/assets/images/IMG_1491_1_Original.jpg', thumbnailWidth: undefined, thumbnailHeight: undefined},
