import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BannerV6 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__slider-area ltn__slider-4 position-relative  ltn__primary-bg">
				<div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">

				<video autoPlay muted loop id="myVideo">
					<source src={publicUrl+"assets/media/home.mp4"} type="video/mp4" />
				</video>

				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-image--- bg-overlay-theme-black-30" data-bs-bg={publicUrl+"assets/img/slider/41.jpg"}>
					<div className="ltn__slide-item-inner text-center">
					<div className="container">
						<div className="row">
						<div className="col-lg-12 align-self-center">
							<div className="slide-item-car-dealer-form">
							<div className="section-title-area ltn__section-title-2 text-center">
								<h1 className="section-title  text-color-white pt-50">Find Your <span className="ltn__secondary-color-3">Perfect</span> Home</h1>
							<h2 className='text-color-white '>
                                       Welcome to the <span className="ltn__secondary-color-3">world of luxury living  </span>
                               A design<br className='pt-20'/> so unique, it was created for you</h2>
							</div>
							{/*<div className="ltn__car-dealer-form-tab">
								<div className="ltn__tab-menu  text-uppercase text-center">
								<div className="nav">
									<a className="active show" data-bs-toggle="tab" href="#ltn__form_tab_1_1"><i className="fas fa-home" />Sale Home</a>
									<a data-bs-toggle="tab" href="#ltn__form_tab_1_2" className><i className="fas fa-home" />Rent Home</a>
								</div>
								</div>
								<div className="tab-content pb-10">
								<div className="tab-pane fade active show" id="ltn__form_tab_1_1">
									<div className="car-dealer-form-inner">
									<form action="#" className="ltn__car-dealer-form-box row"> 
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-3 col-md-6">
										<select className="nice-select">
										<option>Property Type</option>
											<option>Apartments</option>
											<option>Office buildings</option>
											<option>Retail spaces(shopping centers)</option>
											<option>Single Family Home</option>
										</select>
										</div> 
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-3 col-md-6">
										<select className="nice-select">
											<option>Location</option>
											<option>Maharashtra</option>
											
											<option>Mumbai</option>
											
										</select>
										</div> 
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
										<select className="nice-select">
											<option>Sub Location</option>
											<option>Panvel</option>
											<option>Kalyan</option>
											
											<option>Airoli</option>
											<option>Badlapur</option>
											<option>Juhu</option>
											
										</select>
										</div>
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
										<div className="btn-wrapper text-center mt-0 go-top">
											
											<Link to="/shop-right-sidebar" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search</Link>
										</div>
										</div>
									</form>
									</div>
								</div>
								<div className="tab-pane fade" id="ltn__form_tab_1_2">
									<div className="car-dealer-form-inner">
									<form action="#" className="ltn__car-dealer-form-box row"> 
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-3 col-md-6">
										<select className="nice-select">
											<option>Property Type</option>
											
											<option>Office buildings</option>
											<option>Retail spaces(shopping centers)</option>
											<option>Single Family Home</option>
										</select>
										</div> 
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-3 col-md-6">
										<select className="nice-select">
											<option>Location</option>
											<option>Maharashtra</option>
											
											<option>Mumbai</option>
											
										</select>
										</div> 
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
										<select className="nice-select">
											<option>Sub Location</option>
											
											<option>Panvel</option>
											
											
											<option>Airoli</option>
											
											<option>Juhu</option>
											<option>Wadala</option>
											<option> Dadar</option>
											
										</select>
										</div>
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
										<div className="btn-wrapper text-center mt-0 go-top">
											{/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> *
											<Link to="/shop-right-sidebar" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search</Link>
										</div>
										</div>
									</form>
									</div>
								</div>
								</div>
							</div> */}                                       
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default BannerV6