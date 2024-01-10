import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductSliderV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Area Properties</h6>
			          <h1 className="section-title">You May Also Like</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={publicUrl+"assets/img/product/b2.jpg"} alt="#" /></Link>
			           
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/contact">Worli Mumbai</Link></h6>
						<h6>Prossession Status:<b>Ready to move in</b> </h6>
						<h6>Topology: <b>2 & 4 BHK</b></h6>
						<h6>Price: <b><i className="fas fa-rupee-sign"></i> &nbsp;1 Cr.+</b></h6>
			          
			            <div className="search-by-place-btn">
			              <Link to="/product-details">View Detail <i className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={publicUrl+"assets/img/product/b3.jpg"} alt="#" /></Link>
			           
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/contact">Panvel,New mumbai</Link></h6>
						<h6>Prossession Status:<b>Ready to move in</b> </h6>
						<h6>Topology: <b>2 &  3 BHK</b></h6>
						<h6>Price: <b><i className="fas fa-rupee-sign"></i>&nbsp; 1.8 Cr.+</b></h6>
			            <div className="search-by-place-btn">
			              <Link to="/product-details">View Detail <i className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={publicUrl+"assets/img/product/b.jpeg"} alt="#" width={400} height={230} /></Link>
			           
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/contact">kalyan, Maharashtra</Link></h6>
						<h6>Prossession Status:<b>Ready to move in</b> </h6>
						<h6>Topology: <b>3 & 4 BHK</b></h6>
						<h6>Price: <b>On request</b></h6>
			           
			          
			            <div className="search-by-place-btn">
			              <Link to="/product-details">View Detail <i className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={publicUrl+"assets/img/product/b2.jpeg"} alt="#" width={400} height={230} /></Link>
			           
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/contact">Badlapur, Maharashtra</Link></h6>
						<h6>Prossession Status:<b>Ready to move in</b> </h6>
						<h6>Topology: <b>2 & 3 BHK</b></h6>
						<h6>Price: <b><i className="fas fa-rupee-sign"></i>&nbsp;2.3 Cr.+</b></h6>
			           
			            <div className="search-by-place-btn">
			              <Link to="/product-details">View Detail <i className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/*  */}
			    </div>
			  </div>
			</div>
        }
}

export default ProductSliderV3