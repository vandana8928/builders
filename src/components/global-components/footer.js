import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer_v1 extends Component {

    componentDidMount() {

    	const $ = window.$;
    	
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

         $('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

				$(window).scrollTop(0);

			setTimeout(function(){
			    	$(".quarter-overlay").fadeOut(300);
				}, 800);

        });


		$(document).on('click','.theme-btn-1 ', function(){ 
            $( 'div' ).removeClass( 'modal-backdrop' );
            $( 'div' ).removeClass( 'show' );
            $( 'div' ).removeClass( 'fade' );
			$('body').attr("style", "");
        });
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
       // let imgattr = "Footer logo"

        return (
				<footer className="ltn__footer-area  ">
				  <div className="footer-top-area  section-bg-2 plr--5">
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-xl-4 col-md-4 col-sm-4 col-12">
				          <div className="footer-widget footer-about-widget">
				            <div className="footer-logo">
				              <div className="site-logo">
				                <img src={publicUrl+"assets/img/logo-2.png"} alt="Logo"  />
				              </div>
				            </div>
				          
				            <div className="footer-address">
				              <ul>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-placeholder" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p>Manpada,
Kalyan - Shilphata Rd</p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-call" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="tel:+0123-456789">+91 23546 45665</a></p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-mail" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="mailto:example@example.com">quartersales123@gmail.com</a></p>
				                  </div>
				                </li>
				              </ul>
				            </div>
				            <div className="ltn__social-media mt-20">
						    	<Social />
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
						  <h4 className="footer-title"></h4>
				            <div className="footer-menu go-top">
				              <ul>
							   <li><Link to="/">Home</Link></li>
				                <li><Link to="/about">About</Link></li>
				                <li><Link to="/contact">Contact</Link></li>
				                <li><Link to="/faq">FAQ</Link></li>			              
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
						  <h4 className="footer-title"></h4>
							
				            <div className="footer-menu go-top">
				              <ul>
				                
				                <li><Link to="/gallery">Gallery</Link></li>
				               
				                <li><Link to="#">Location</Link></li>
				                <li><Link to="/term-condition">Terms &amp; Conditions</Link></li>
				                <li><Link to="/privacy">Privacy &amp; Policy</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
						  <h4 className="footer-title"></h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/service-details">Services</Link></li>
				                <li><Link to="/login">Login</Link></li>				               
				                <li><Link to="/add-listing">Amenities</Link></li>
				                <li><Link to="/faq">FAQ</Link></li>
				              
				              </ul>
				            </div>
				          </div>
				        </div>
						<div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
						  <h4 className="footer-title"></h4>
				            <div className="footer-menu go-top">
				              <ul>
				                
								<img
                            src={publicUrl + "assets/img/others/scanner.png"}
                            alt="footer scanner"
                          />
				              
				              </ul>
				            </div>
				          </div>
				        </div>
						

				       
				      </div>
				    </div>
				  </div>
				  <Copyright />
				</footer>
        )
    }
}


export default Footer_v1