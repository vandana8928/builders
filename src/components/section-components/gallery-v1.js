
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
							<h6>Room</h6>
							
						</div>
					
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/club1.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/club1.jpg"} alt="gallery"  height={300} width={400} className="gallery_img"/>
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Club</h6>
							
						</div>
						
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/garden.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/garden.jpg"} alt="gallery"  height={300} width={400} className="gallery_img"/>
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Garden</h6>
							
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
							<h6>Constuction</h6>
							
						</div>
						
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/jogging.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/jogging.jpg"} alt="gallery"  height={300} width={400} className="gallery_img"/>
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Jogging Park</h6>
							
						</div>
						
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/gym.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/gym.jpg"} alt="gallery"  height={300} width={400} className="gallery_img"/>
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Gym</h6>
							
						</div>
						
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/swimming.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/swimming.jpg"} alt="gallery"  height={300} width={400} className="gallery_img"/>
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Swimming Pool</h6>
							
						</div>
						
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/club.jpeg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/club.jpeg"} alt="gallery"  height={300} width={400} className="gallery_img"/>
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Community House</h6>
							
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