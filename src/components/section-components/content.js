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
                        <div className="ltn__video-img alignleft">
                          <img
                            src={publicUrl + "assets/img/others/scanner.png"}
                            alt="video" height={300}
                          />
                         {/* <a
                            className="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----"
                            href="https://www.youtube.com/watch?v=iCMQ7US1JEc&ab_channel=CodeEstate"
                            data-rel="lightcase:myCollection"
                          >
                            <i className="fa fa-play" />
    </a>*/}
                        </div>
                        <p>
                        The project has been registered via Maharashtra RERA Registration Nos. P51900008345, P51900008962 available at maharera.mahaonline.gov.in under registered projects.
                        </p>
                        <p>
                        RERA is an iconic act that aims to bring transparency and efficiency in the real estate sector, protect consumers, and fast track dispute resolution. It is an act that promotes good governance in the market, which helps customers get more information about projects and reduces the risk associated with the purchase
                        </p>
                        <p>
                        The MahaRERA Registration Number is the mark of integrity, and all new Lodha Group projects are RERA compliant; see a list of our RERA projects here
                        <br/>
                        To find out more about what is RERA, Click  Above.
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
