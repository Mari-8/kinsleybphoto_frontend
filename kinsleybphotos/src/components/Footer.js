import React from 'react'
import { GrInstagram } from "react-icons/gr";


export default function Footer() {
    return (
        <div className="text-center">
            <div className="mt-5 pt-5 pb-5 footer">
                <div className="container">
                 <div className="row">
                   <div className="col-lg-5 col-xs-12 about-company">
                        <h2>Kinsley B Photo</h2>
                        <p className="pr-5 text-white-50">Connect with me on my social media! I post regularly and it is another great way to see my work</p>
                        <p><a href="#"><p><i class="fab fa-facebook-f"></i>Facebook</p></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
                    </div>
                    <div className="col-lg-2 col-xs-12">
                        <div class="col item social">
                            <button><GrInstagram /></button>
                            <button><i className="icon ion-social-twitter"></i></button>
                            <button><i className="icon ion-social-snapchat"></i></button>
                            <button><i className="icon ion-social-instagram"></i></button>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-xs-12 location">
                      <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                        <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                        <p className="mb-0"><i class="fa fa-phone mr-3"></i>(541) 754-3010</p>
                        <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col copyright">
                      <p className=""><small className="text-white-50">© 2021. All Rights Reserved.</small></p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
