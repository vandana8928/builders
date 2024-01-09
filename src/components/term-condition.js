import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import Term from './section-components/term-condition';

import Footer from './global-components/footer';

const ContactV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Term & conditions" subheader="Term and conditions" />
        <Term></Term>
        <Footer />
    </div>
}

export default ContactV1

