import React from 'react'



export default function IntroCard() {
    return (
        <div className="card mb-3" style={{"max-width": "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://res.cloudinary.com/kinsleybphoto/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1623859242/E764E512-2AFF-4E5F-865B-2E696CD9AFC7_1_g1cvtg.jpg" className="about-me-image" alt="" />
                </div>
                <div className="col-md-8">
                <div className="card-body text-center">
                    
                    <p className="card-text">Hellooo i’m Kinsley , your new photo enthusiast! I’m a 20 year old lifestyle photographer however, I’m not sure I can fit into one genre!😄
                    •
                    I love to capture photos that make a statement and tell a story.
                    I think it’s so special that we are able to use photography to express our greatest emotions , remember those special moments , and share with others how we see the world!
                    I love to show people all the best parts of themselves and share my love of photography at the same time.
                    
                   </p>
                </div>
                </div>
            </div>
        </div>
    )
}
