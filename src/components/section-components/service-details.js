import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ServiceDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__page-details-area ltn__service-details-area mb-105">
				<div className="container">
				<div className="row">
					<div className="col-lg-8">
					<div className="ltn__page-details-inner ltn__service-details-inner">
						<div className="ltn__blog-img">
						<img src={publicUrl+"assets/img/service/k1.jpg"} alt="Image" />
						</div>
						<p> <span className="ltn__first-letter">R</span> eal estate encompasses a broad range of services, catering to various aspects of property transactions, management, development, and more.  </p>

                         <p><b>Property Sales and Purchase:</b> Facilitating the buying and selling of residential, commercial, industrial, and land properties.</p>

				
						<p><b>Property Management:</b> Overseeing properties on behalf of owners, which may include rent collection, maintenance, tenant relations, and property upkeep.</p>
						<p><b>Real Estate Development:</b> Involves the acquisition, financing, planning, construction, and marketing of new properties, including residential, commercial, and mixed-use developments.</p>
						<div className="row">
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/s4.jpg"} alt="image" />
							<label>Grocery mall</label>
						</div>
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/s5.jpg"} alt="image" height={245} width={400} />
							<label>Collage</label>
						</div>
						</div>
					<p><b>Consultation and Advisory:</b> Real estate consultants offer expert advice on various aspects of the industry, such as market analysis, property development, legal issues, and investment strategies.</p>
	               <p><b>Rental Services:</b> Real estate agents and property managers help landlords find suitable tenants for their rental properties. This includes advertising, tenant screening, lease agreements, and rent collection.</p>
						<div className="ltn__service-list-menu text-uppercase mt-50 d-none">
						<ul>
							<li><i className="fas fa-car" /> Front Brakes Repair <span className="service-price">$225.95 <span>Plus Parts</span></span> </li>
							<li><i className="fas fa-life-ring" /> Rear Brakes Repair <span className="service-price">$225.95 <span>Plus Parts</span></span> </li>
							<li><i className="fas fa-cog" /> Axle <span className="service-price">$225.95 <span>Plus Parts</span></span> </li>
							<li><i className="fas fa-car" /> Starters / Alternators <span className="service-price">$225.95 <span>Plus Parts</span></span> </li>
						</ul>
						</div>
					</div>
					</div>
					<div className="col-lg-4">
					<aside className="sidebar-area ltn__right-sidebar">
						{/* Menu Widget */}
						<div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
						<ul className="go-top">
							<li><Link to="#">Property Management </Link></li>
							<li className="active"><Link to="/service">Mortgage Service</Link></li>
							<li><Link to="#">Consulting Service </Link></li>
							<li><Link to="#">Home Buying </Link></li>
							<li><Link to="#">Home Selling </Link></li>
							<li><Link to="#">Escrow Services </Link></li>
						</ul>
						</div>
						{/* Newsletter Widget */}
						
						<div className="widget ltn__banner-widget go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/service/s2.jpg"} alt="Banner" /></Link>
						<label>Club</label>
						</div>
						{/* Banner Widget */}
						<div className="widget ltn__banner-widget go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/service/s3.jpg"} alt="Banner " /></Link>
						<label>Mall</label>

						
						</div>
						
					</aside>
					</div>
				</div>
				</div>
			</div>
  
        }
}

export default ServiceDetails