import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Category from "./section-components/category-v1";

import Footer from './global-components/footer';

const ContactV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Amenities" subheader="Amenties" />
        <Category />
      
        <Footer />
    </div>
}

export default ContactV1

