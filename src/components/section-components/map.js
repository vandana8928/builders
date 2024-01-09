import React, { Component } from "react";


class Map extends Component {
  render() {
  

    return (
      <div className="google-map mb-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.423372351174!2d72.81610677336477!3d18.95690085570428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce11a41f57e3%3A0xd9fc359f5175bb78!2sBranding%20Catalyst!5e0!3m2!1sen!2sin!4v1704797452541!5m2!1sen!2sin"
          width="100%"
          height="100%"
         // frameBorder={0}
          allowFullScreen
          aria-hidden="false"
         // tabIndex={0}
          title="map"
        />
      </div>
    );
  }
}
export default Map;
