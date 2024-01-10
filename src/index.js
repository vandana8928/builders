import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";

import F from "./components/section-components/content";
import Contact from "./components/contact";
import Amenities from "./components/amenities";
import Gallery from "./components/gallery";
import Loction from "./components/location";
import Login from "./components/login";
import Register from "./components/register";
import Service from "./components/service";
import Term from "./components/term-condition";
import Privacy from "./components/privacy";
import ServiceDetails from "./components/service-details";
import About from "./components/about";
import Faq from "./components/faq";
import Error from "./components/404";

class Root extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route  path="/faq" component={Faq} />
            <Route path="/contact" component={Contact} />
            <Route path="/amenities" component={Amenities} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/location" component={Loction} />
            
            <Route path="/term-condition" component={Term} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/service" component={Service} />
            <Route path="/service-details" component={ServiceDetails} />
            <Route path="/section-components/f" component={F} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={Error} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("quarter"));
