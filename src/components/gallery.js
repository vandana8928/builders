import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import Gallery from "./section-components/gallery-v1";
import ProSlider from "./section-components/product-slider-v3";
import Footer from './global-components/footer';

const Galleryv1 = () => {
   
    return <div>
        <Navbar />
        <PageHeader headertitle="Gallery" subheader=" Our Gallery" />
        <Gallery/>
      
        <hr></hr>
        <ProSlider/>
    
        <Footer />
    </div>
}

export default Galleryv1

