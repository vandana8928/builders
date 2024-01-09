import React, { Component } from "react";

class Explore extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="main  pt-100 pb-100">
        <div className="container">
          <img
            src={publicUrl + "assets/img/bg/room2.jpg"}
            alt="Banner"
            className="E_image"
          />
          <div className="intro-text fl-wrap">
            <h2>
              Explore <br /> Your Dream World at Quarter!
            </h2>
            <div className="row">
              <div className="col-md-3">
                <div className="explore-section fl-wrap">
                  <h3>Phase I</h3>
                  <ul className="pr-list">
                    <li>
                      <span className="fa "></span> Ready possession
                    </li>
                    <li>
                      <span className="fa"></span> 324 flats (2, 2.5 & 3 BHK)
                    </li>
                    <li>
                      <span className="fa"></span> 3 buildings with 6 wings
                    </li>
                    <li>
                      <span className="fa"></span> 14 storeyed
                    </li>
                    <li>
                      <span className="fa"></span> Sold out (2, 2.5 & 3 BHK)
                    </li>
                    <li>
                      <span className="fa"></span> Few flats available ranging
                      from 77 Lacs to 1.10 Cr.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="explore-section fl-wrap">
                  <h3>Phase II</h3>
                  <ul className="pr-list">
                    <li>
                      <span className="fa"></span> Under construction (2 & 3
                      BHK)
                    </li>
                    <li>
                      <span className="fa"></span> 340 flats (2 & 3 BHK)
                    </li>
                    <li>
                      <span className="fa"></span> Total flats 383 flats{" "}
                    </li>
                    <li>
                      <span className="fa"></span> 2 buildings with 4 wings
                    </li>
                    <li>
                      <span className="fa"></span> Building D 24 storey and Bldg
                      E 23 stored
                    </li>
                    <li>
                      <span className="fa"></span> Flats starting from ₹ 80 Lakh
                      - 2 BHK, ₹ 1.15 Cr onwards – 3 BHK
                    </li>
                    <li>
                      <span className="fa"></span> Possession december 2024
                      (Building D)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="explore-section fl-wrap">
                  <h3>Phase III</h3>
                  <ul className="pr-list">
                    <li>
                      <span className="fa"></span> Proposed Commercial
                      (Essential shopping)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
