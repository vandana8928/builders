import React, { Component } from "react";

class AboutV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__about-us-area pt-120 pb-90 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">About Us</h1>
                  <p>
                  our passion is to create landmarks that meet
                    global standards, epitomise the values of our family, and
                    are built on a legacy of trust spanning four decades. We are
                    guided by our vision of ‘Building a Better Life’. Quarter
                    enables and transforms you to be a better version of
                    yourself by maximising your potential and leading a
                    flourished life.
                  </p>
                  <p>
                    All our developments deliver the highest
                    level of design and craftsmanship, uncompromising quality,
                    unparalleled service – putting  Quarter developments in the
                    league of the world’s finest. Our homes are designed to
                    enable more productivity, amenities designed and curated to
                    equip with opportunity! Be it greens/open spaces designed to
                    live a healthier and fuller life or gentry to match
                    like-mindedness, banquets and club houses to network or
                    striking the right chord with the right people,
                    ensures that your next biggest milestone, is within reach.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-right">
                <img
                  src={publicUrl + "assets/img/others/about1.avif"}
                  alt="About Us"
                  height={500} className="about_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutV2;
