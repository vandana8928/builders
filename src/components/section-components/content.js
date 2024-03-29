import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class F extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__faq-area mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__faq-inner ltn__faq-inner-2">
                <div id="accordion_2">
                  
                  
                  {/* card */}
                  <div className="card">
                    <h6
                      className="ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-2"
                      aria-expanded="true"
                    >
                      
                      World One RERA
                    </h6>
                    <div
                      id="faq-item-2-2"
                      className="collapse show"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        {/* <div className="ltn__video-img alignleft"> */}
                          {/* <img */}
                            {/* src={publicUrl + "assets/img/others/scanner.png"} */}
                            {/* alt="video" height={300} */}
                          {/* /> */}
                        {/*  */}
                        {/* </div> */}
                        <p>
                        The project has been registered via Maharashtra RERA Registration Nos. P51900008345, P51900008962 available at maharera.mahaonline.gov.in under registered projects.
                        </p>
                        <p>
                        RERA is an iconic act that aims to bring transparency and efficiency in the real estate sector, protect consumers, and fast track dispute resolution. It is an act that promotes good governance in the market, which helps customers get more information about projects and reduces the risk associated with the purchase
                        </p>
                        <p>
                        The MahaRERA Registration Number is the mark of integrity, and all new quarter Group projects are RERA compliant. 
                        <br/>
                       
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default F;
