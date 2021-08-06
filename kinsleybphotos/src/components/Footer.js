import React from 'react'
import { IconContext } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa'


export default function Footer() {
    return (
        <div className="text-center">
            <div className="mt-5 pt-5 pb-5 footer">
                <div className="container">
                 <div className="row">
                   <div className="col-lg-5 col-xs-12 about-company">
                        <h2>Kinsley B Photo</h2>
                        <br/>
                        <p className="pr-5 text-white-50">Connect with me on my social media! I post regularly and it is another great way to see my work</p>
                        
                    </div>
                    <div className="col-lg-2 col-xs-12">
                        <div class="col item social">
                            <IconContext.Provider value={{ color: "white", className: "facebook-icon", size: "2em"}}>
                              <div>
                              <a href="https://www.facebook.com/kinsley.welker.9">< FaFacebookSquare /></a>
                                <p>Kinsley Brook Altimari</p>
                              </div>
                            </IconContext.Provider>
                            <br/>
                            <IconContext.Provider value={{ color: "white", className: "facebook-icon", size: "2em"}}>
                              <div>
                                <a href="https://www.instagram.com/_kinsleybphoto/">< FaInstagram /></a>
                                <p>@_kinsleybphotos</p>
                              </div>
                            </IconContext.Provider>
                            
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-xs-12 location">
                      <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                        <p>Murfreesboro, Tn, 37130</p>
                        <p className="mb-0"><i class="fa fa-phone mr-3"></i>(123) 456-7891</p>
                        <p><i className="fa fa-envelope-o mr-3"></i>kinsley_b_photo@gmail.com</p>
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
