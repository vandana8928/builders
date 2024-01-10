import React from "react";
import Navbar from "./global-components/navbar";
import BannerV6 from "./section-components/banner";
import About from "./section-components/about";
import ServiceV1 from './section-components/service-v1';
import Faq from "./section-components/faq-v1";
import Content from "./section-components/content";
import Map from "./section-components/map";
import ProSlider from "./section-components/product-slider-v3";
import Testimonial from "./section-components/testimonial-v1";
import Footer from "./global-components/footer";
import Whatsapp from "./section-components/whatsapp";

const Home_V7 = () => {
  return (
    <div>
      <Navbar CustomClass="ltn__header-transparent gradient-color-2" />    
      <BannerV6 />    
      <About /> 
      <ServiceV1/>
      {/*<Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" />  */}
      <Faq />
      <Map></Map>
      <Content/>
      <ProSlider />
     {/*<Whatsapp/>*/}
      <Testimonial />   
      {/*<CallToActionV1 />*/}
      <Whatsapp/>
      <Footer />
    </div>
  );
};

export default Home_V7;
