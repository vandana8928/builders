import React, { Component } from "react";


class Map extends Component {
  render() {
   // let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="google-map mb-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7290.777192099777!2d73.08550216753335!3d19.21495597254249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7958a402dc76b%3A0x432fefe48012f679!2sManpada%2C%20Ramnagar%2C%20Dombivli%20East%2C%20Dombivli%2C%20Maharashtra%20421201!5e0!3m2!1sen!2sin!4v1704475735988!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameBorder={0}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          title="map"
        />
      </div>
    );
  }
}

export default Map;
