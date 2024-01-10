import React, { Component } from "react";

class Explore extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="main ">
        <img
          src={publicUrl + "assets/img/others/e1.avif"}
          alt="Banner"
          className="E_image"
        />

        <h1 className="intro-text">
          Welcome to the world of luxury living
          <br />A design so unique, it was created for you
        </h1>
      </div>
    );
  }
}

export default Explore;
