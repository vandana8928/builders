import React, { Component } from "react";
import { Link } from "react-router-dom";


class FaqV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__faq-area mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
             
                <h1 className="section-title pt-30">FAQ'S</h1>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="ltn__faq-inner ltn__faq-inner-2">
                <div id="accordion_2">
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-1"
                      aria-expanded="false"
                    >
                      How can I explore available flats on your website?
                    </h6>
                    <div
                      id="faq-item-2-1"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          You can easily browse available flats by visiting our
                          website's "Properties" or "Available Units" section.
                          There, you'll find detailed information about each
                          flat, including floor plans, amenities, and pricing.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-2"
                      aria-expanded="true"
                    >
                      What types of flats do you offer?
                    </h6>
                    <div
                      id="faq-item-2-2"
                      className="collapse show"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <div className="ltn__video-img alignleft">
                          <img 
                            src={publicUrl + "assets/img/bg/room.jpeg"}
                            alt="video popup bg" className="faq_img"
                           />
                         
                         {/* <a
                            className="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----"
                            href="https://www.youtube.com/watch?v=I-wPSZwBbJg&ab_channel=AbrarTeli"
                         
                            data-rel="lightcase:myCollection"</a>
    >*/}                  
                            
                          
                        
                        </div>
                        <p>
                          We offer a variety of flats, including one, two, and
                          three-bedroom apartments. Our range caters to
                          different preferences and family sizes.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-3"
                      aria-expanded="false"
                    >
                      What are the amenities included with the flats?
                    </h6>
                    <div
                      id="faq-item-2-3"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Our flats come with a range of amenities, including
                          but not limited to parking spaces, security services,
                          recreational areas, and more. You can find a detailed
                          list of amenities on the property description page.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-4"
                      aria-expanded="false"
                    >
                      What is the pricing structure for your flats?
                    </h6>
                    <div
                      id="faq-item-2-4"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Our pricing varies based on factors such as the type
                          of flat, floor level, and additional amenities. For
                          detailed pricing information, please visit the
                          property listing on our website or contact our sales
                          team.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-5"
                      aria-expanded="false"
                    >
                      How do I get updates on the construction progress of my
                      flat?
                    </h6>
                    <div
                      id="faq-item-2-5"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          We provide regular construction updates through our
                          website, newsletters, and direct communication.
                          Additionally, our customer service team is available
                          to address any queries you may have regarding the
                          construction progress.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-6"
                      aria-expanded="false"
                    >
                      Can I customize the interiors of my flat?
                    </h6>
                    <div
                      id="faq-item-2-6"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Depending on the project, we may offer customization
                          options. Please contact our sales team to discuss any
                          specific customization requests or options available
                          for the property you are interested in.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                </div>
               
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar-area ltn__right-sidebar">
                <div className="widget ltn__banner-widget go-top">
                  <Link to="#">
                    <img
                      src={publicUrl + "assets/img/bg/room3.jpg"}
                      alt="Banner "
                      height={270} className="faq_img"
                    />
                  </Link>
                </div>
                {/* Banner Widget */}
                <div className="widget ltn__banner-widget go-top">
                  <Link to="#">
                    <img
                      src={publicUrl + "assets/img/bg/room2.jpg"}
                      alt="Banner"
                      height={270} className="faq_img"
                    />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FaqV1;
