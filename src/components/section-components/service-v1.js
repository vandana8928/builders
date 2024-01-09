import React, { Component } from "react";
import { Link } from "react-router-dom";


class ServiceV5 extends Component {
  render() {
  

    return (
      <div className="ltn__service-area section-bg-1 pt-115 pb-70 go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Our Services
                </h6>
                <h1 className="section-title">Our Services</h1>
              </div>
            </div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house" />
                   
                  </span>
                 
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">easy lease</Link>
                  </h3>
                  <p>
                    Through Easy Lease we help customers looking to lease their
                    Quarter residences and support tenants interested in renting a
                    Quarter home.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-mortgage" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Loyalty program</Link>
                  </h3>
                  <p>
                    Quarter Priva is our exclusive membership program for our
                    esteemed customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-operator" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">home loan support</Link>
                  </h3>
                  <p>
                    We have an in-house team that offers support and assistance
                    in home loan procurement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house-1" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">registration support </Link>
                  </h3>
                  <p>
                  
                    Post booking, our team helps customers with the registration
                    process to ensure it’s a hassle free experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house-3" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Facility management</Link>
                  </h3>
                  <p>
                    Our facilities management team provides on-site support to
                    attend all property related needs of the customer post
                    possession.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-official-documents" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">NRI Services </Link>
                  </h3>

                  <p>
                   
                    NRI services NRI services For NRI customers, we offer
                    special services and offers through our NRI services team.
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

export default ServiceV5;
