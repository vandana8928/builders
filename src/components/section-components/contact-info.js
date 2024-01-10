import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class ContactInfo extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src={publicUrl + "assets/img/icons/email.png"}  className="Email" alt="Icon" />
                </div>
                <h3>Email Address</h3>
                <p>
                  quartersales123@gmail.com <br />
                  ramesh2453@gmail.com
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src={publicUrl + "assets/img/icons/phone.png"} alt="Icon" />
                </div>
                <h3>Phone Number</h3>
                <p>
                +91 90046 29888 <br /> 
                </p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src={publicUrl + "assets/img/icons/address.png"} alt="Icon" />
                </div>
                <h3>Office Address</h3>
                <p>BrandingCatalyst 45 Girgoan Terrace Dr. D. D
                  <br />
                  Sathe Marg "B" Block, 3rd Floor Room No.6 Mumbai-400004
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
