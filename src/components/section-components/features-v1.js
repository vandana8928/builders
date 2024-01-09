import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import parse from 'html-react-parser';

class FeaturesV1 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = this.props.customClass ? this.props.customClass :''

    return <div className={ customClass } >
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Focus</h6>
			          <h1 className="section-title">Our Main Focus</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__custom-gutter--- justify-content-center go-top">
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/21.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details">Registration Support</Link></h3>
			            <p>our team helps customers with the registration process to ensure it’s a hassle free experience.</p>
			            <Link className="ltn__service-btn" to="/service-details">Know more <i className="flaticon-right-arrow" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/22.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details"> NRI service</Link></h3>
			            <p> For NRI customers, we offer special services and offers through our NRI services team</p>
			            <Link className="ltn__service-btn" to="/service-details">Know more <i className="flaticon-right-arrow" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/23.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details">Home Loan Support</Link></h3>
			            <p> We have an in-house team that offers support and assistance in home loan procurement. </p>
			            <Link className="ltn__service-btn" to="/service-details">Know more <i className="flaticon-right-arrow" /></Link>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default FeaturesV1