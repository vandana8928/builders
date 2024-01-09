import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import Gallery from "./section-components/gallery-v1";
import ProSlider from "./section-components/product-slider-v3";
import G from "./tab-menu/Gallery";

import Footer from './global-components/footer';

const Galleryv1 = () => {
   
    return <div>
        <Navbar />
        <PageHeader headertitle="Gallery" subheader=" Our Gallery" />
        <Gallery m="https://www.pexels.com/photo/green-and-blue-peacock-feather-674010/"/>
        <Gallery/>
        <hr></hr>
        <ProSlider/>
       <G/>
        <Footer />
    </div>
}

export default Galleryv1

