
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Gallery extends Component {

    render(props) {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__img-slider-area">
				<div className="container-fluid">
        <div className="col-lg-12">
              
            </div>
				<div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/g1.png"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/g1.png"} alt="Gallery" height={300} width={400} className="gallery_img" />
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Hall</h6>
							
						</div>
						<div className="btn-wrapper go-top">
							<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/g2.jpeg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/g2.jpeg"} alt="gallery"  height={300} width={400} className="gallery_img"/>
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>The luxury crib</h6>
							
						</div>
						<div className="btn-wrapper go-top">
							<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/g3.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/g3.jpg"} alt="gallery"  height={300} width={400} className="gallery_img"/>
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>The Best City</h6>
							
						</div>
						<div className="btn-wrapper go-top">
							<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/g4.jpeg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/g4.jpeg"} alt="gallery"   height={300} width={400} className="gallery_img"/>
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>constuction picture</h6>
							
						</div>
						<div className="btn-wrapper go-top">
							<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/g3.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/g6.jpg"} alt="gallery"  height={300} width={400} className="gallery_img"/>
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>The balcony picture</h6>
							
						</div>
						<div className="btn-wrapper go-top">
							<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default Gallery