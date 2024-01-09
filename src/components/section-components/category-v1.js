import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CategoryV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__category-area ltn__product-gutter section-bg-1---  pb-90 go-top">
			  <div className="container">
			    <div className="row">
			     <p className='text-center'><b>Amenities </b>
					<br/>Apart from the scenic atmosphere created just for you, there are several facilities at Quarter that make living here a truly luxurious experience.</p>
			    </div>
			    <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          <Link to="/shop">
			           {/* <span className="category-icon"><i className="flaticon-car" /></span>*/}
						<img
                      src={publicUrl + "assets/img/others/a1.jpg"}
                      alt="Banner"
                    
					 height={200}
                    />

			            <span className="category-title">Stay Peaceful</span>
			           
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          <Link to="#">
			            {/*<span className="category-icon"><i className="flaticon-swimming" /></span>*/}
						<img
                      src={publicUrl + "assets/img/others/a2.jpg"}
                      alt="Banner"
                    
					 height={200}
                    />

			            <span className="category-title">Stay Relaxed</span>
			           
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          <Link to="#">
			          {/* <span className="category-icon"><i className="flaticon-secure-shield" /></span>*/}
						<img
                      src={publicUrl + "assets/img/others/a3.jpg"}
                      alt="Banner"
                    
					 height={200}
                    />

			            <span className="category-title">Stay Active</span>
			           
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          <Link to="#">
			           {/*<span className="category-icon"><i className="flaticon-stethoscope" /></span>*/}
						<img
                      src={publicUrl + "assets/img/others/a4.jpg"}
                      alt="Banner"
                    
					 height={200}
                    />

			            <span className="category-title">Stay Peaceful</span>
			           
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          <Link to="#">
			           {/* <span className="category-icon"><i className="flaticon-book" /></span>*/}
					   <img
                      src={publicUrl + "assets/img/others/a5.jpeg"}
                      alt="Banner"
                    
					 height={200}
                    />

			            <span className="category-title">Stay Refreshed</span>
			           
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          <Link to="#">
			           {/* <span className="category-icon"><i className="flaticon-bed-1" /></span>*/}
					   <img
                      src={publicUrl + "assets/img/others/a6.jpg"}
                      alt="Banner"
                    
					 height={200}
                    />

			            <span className="category-title">Stay Social</span>
			           
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          <Link to="#">
			          {/* <span className="category-icon"><i className="flaticon-home-2" /></span>*/}
					  <img
                      src={publicUrl + "assets/img/others/a8.jpg"}
                      alt="Banner"
                    
					 height={200}
                    />

			            <span className="category-title">Library Area</span>
			        
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          <Link to="#">
			           {/* <span className="category-icon"><i className="flaticon-slider" /></span>*/}
					   <img
                      src={publicUrl + "assets/img/others/a7.jpg"}
                      alt="Banner"
                    
					 height={200}
                    />

			            <span className="category-title">Parking Space</span>
			           
			          </Link>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default CategoryV1