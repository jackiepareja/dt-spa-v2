import React, { Component } from "react";

import "../sass/index.scss";
import "../res/styles/icon-font.css";

import Promo from "../components/Promo";
import Navigation from "../components/Navigation";
import Navnav from "../components/Navnav";
import PolicyContent from "../components/PolicyContent";
import Footer from "../components/Footer";

class Policy extends Component {
  render() {
    return (
      <div className="Policy">
        <Promo />
        <Navnav />
        <Navigation />
        <PolicyContent />
        <Footer />
      </div>
    );
  }
}

export default Policy;
