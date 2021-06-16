import React from 'react'



export default function HobbyCard() {
    return (
        <div className="card mb-3" style={{"max-width": "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://res.cloudinary.com/kinsleybphoto/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1623859247/B993CFCF-91F3-4406-B8A6-FA13DF532690_hykiwf.jpg" className="about-me-image" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body text-center">
                   
                    <p className="card-text">
                    My hobbies cover a wide variety from fashion and thifting to plants, crafting, personal growth, mission work, and travel.
                    My mission is to create smiles, connect with others, and continually push myself to exceed my own expectations.
                    I want to do this because my father always told me to use the talents I was given by God so that’s what I’m here to do, make mistakes and grow from them.
                    •
                    Join me while I chase my dream with a lens in my hand!</p>
                </div>
                </div>
            </div>
        </div>
    )
}