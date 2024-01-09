import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import parse from "html-react-parser";

class Testimonial extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    

    return (
      <div
        className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70"
        data-bs-bg={publicUrl + "assets/img/bg/20.jpg"}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Our Testimonial
                </h6>
                <h1 className="section-title">Clients Feedback</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7">
                <div className="ltn__testimoni-info">
                  <p>
                    <i className="flaticon-left-quote-1" />
                    Good society. Many aminites available. Also good
                    restaurants. Construction of buildings is nice. Entrence
                    from road some what typical. Entrence to building is on
                    congested road. Majority of people residing are from Jain
                    religious. Also Jain temple is there.
                  </p>
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      <img
                        src={publicUrl + "assets/img/testimonial/p4.jpg"}
                        alt="#"
                        height={50}
                      />
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>riya varma</h5>
                      <label>Selling Agents</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7">
                <div className="ltn__testimoni-info">
                  <p>
                    <i className="flaticon-left-quote-1" />
                    The houses are amazing, the architecture and facade are
                    amazing too, but the prices for these apartments is
                    unreasonable given they are in a third world country and
                    that too being the worst in all lists from women safety to
                    infant mortality.
                  </p>
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      <img
                        src={publicUrl + "assets/img/testimonial/p1.jpg"}
                        alt="#"
                        height={50}
                        width={100}
                      />
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>mukesh gupta</h5>
                      <label>Selling Agents</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7">
                <div className="ltn__testimoni-info">
                  <p>
                    <i className="flaticon-left-quote-1" />6 years ago This is
                    the one of the highest skyscraper in Mumbai and really have
                    high level prestige. Actually it is really heaven for any
                    middle class person This place is really well established
                    and well developed it has more than 60 floors and love to
                    visit skyscraper like this.
                  </p>
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      <img
                        src={publicUrl + "assets/img/testimonial/p2.jpeg"}
                        alt="#"
                        height={50}
                        width={100}
                      />
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>shivani </h5>
                      <label>Selling Agents</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7">
                <div className="ltn__testimoni-info">
                  <p>
                    <i className="flaticon-left-quote-1" />
                    Was part of this project for a short time. The view from top
                    is breathtaking. The flats here are ultra luxurious and
                    spacious starting from 8000 to 14000 sqft. The completion
                    will take time as all the interior work is incomplete
                    because of the issues it faced in the past.
                  </p>
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      <img
                        src={publicUrl + "assets/img/testimonial/p3.jpeg"}
                        alt="#"
                        height={50}
                        width={100}
                      />
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>kapil Yadav</h5>
                      <label>Selling Agents</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
