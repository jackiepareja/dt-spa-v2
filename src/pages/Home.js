import React, { Component } from "react";

import "../sass/index.scss";
import "../res/styles/icon-font.css";

import Promo from "../components/Promo";
import Navigation from "../components/Navigation";
import Navnav from "../components/Navnav";
import Header from "../components/Header";
import About from "../components/About";
import Features from "../components/Features";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Promo />
        <Navnav />
        <Navigation />
        <Header />
        <About />
        <Features />
        <Services />
        <Reviews />
        <Booking />
        <Footer />
      </div>
    );
  }
}

export default Home;
