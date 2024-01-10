import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutV4 from './section-components/about';


import ProSlider from "./section-components/product-slider-v3";
import Footer from './global-components/footer';
import Explore from './section-components/explore';
import Specification from './section-components/specification';

const About_v1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About Us" />
        <AboutV4 />
        <Explore/>
        <Specification/>
        <ProSlider/>
        <Footer />
    </div>
}

export default About_v1

