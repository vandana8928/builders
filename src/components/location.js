import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Location from './section-components/location';

import Footer from './global-components/footer';

const LocationPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Location" customclass="mb-0" />
        <Location  />
      
        <Footer />
    </div>
}

export default LocationPage

