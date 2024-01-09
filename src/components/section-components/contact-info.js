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
                  <img src={publicUrl + "assets/img/icons/10.png"} alt="Icon" />
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
                  <img src={publicUrl + "assets/img/icons/11.png"} alt="Icon" />
                </div>
                <h3>Phone Number</h3>
                <p>
                  +91 23546 45665 <br /> +91 64759 45658
                </p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src={publicUrl + "assets/img/icons/12.png"} alt="Icon" />
                </div>
                <h3>Office Address</h3>
                <p>
                  Manpada, Kalyan - Shilphata Rd, Bhadra <br />
                  Nagar, Dombivli, Maharashtra 421204
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
