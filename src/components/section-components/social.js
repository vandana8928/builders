import React, { Component } from 'react';



class Social extends Component {

    render() {

       // let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__social-media">
			<ul>
				<li><a href="https://www.facebook.com/brandingcatalyst/" title="Facebook" className='facebook'><i className="fab fa-facebook-f" /></a></li>
				<li><a href="https://twitter.com/_BCatalyst_" title="Twitter"><i className="fab fa-twitter" /></a></li>
				<li><a href="https://www.instagram.com/branding_catalyst/" title="Instagram" className='insta'><i className="fab fa-instagram" /></a></li>
				<li><a href="https://brandingcatalyst.net/" title="Dribbble" className='globe'><i className="fab fa-dribbble" /></a></li>
			</ul>
		</div>
        }
}

export default Social