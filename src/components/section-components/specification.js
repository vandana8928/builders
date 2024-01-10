import React, { Component } from "react";

class AboutV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
        <div className="ltn__about-us-area pt-120 pb-90 ">
        <div className="container">
          <div className="row">
          
              
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-right">
                <img
                  src={publicUrl + "assets/img/others/explore.avif"}
                  alt="About Us"
                  height={500} className="about_img"
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    Specification
                  </h6>
                  <h1 className="section-title">Specification</h1>
                  <p>
                 

                    Not just exotic outdoors, your home at Siyona also has indoors to match. Every home is fitted with state of the art fittings for ultimate luxury and comfort.
                  </p>
                  <p>
                  <ul >
												<li><span className="fa "></span> Total vitrified flooring all over the flat</li>
												<li><span className="fa "></span> Anti-skid flooring at terrace and toilets</li>
												
												<li><span className="fa "></span> Dado tiles up to the ceiling in all toilets</li>
												<li><span className="fa "></span> Generator backup for the lighting load in all over the flat</li>
												<li><span className="fa "></span> Parellel platform with modular kitchen (without trolleys)</li>
												<li><span className="fa "></span> Telephone points in all bedrooms and living room</li>
												
												<li><span className="fa "></span> Video door phone with bell</li>
												<li><span className="fa "></span> Solar hot water for bathing in each toilet</li>
												
												<li><span className="fa "></span> TV points in living room, master bedroom along with AC points in all bedrooms</li>
											</ul>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
     
    );
  }
}

export default AboutV2;
