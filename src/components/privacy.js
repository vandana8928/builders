import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Privacy from './section-components/privacy';

import Footer from './global-components/footer';

const Privacy1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Privacy & policy" subheader="Our privacy & policy" />
       
        <Privacy/>
        <Footer />
    </div>
}

export default Privacy1;

