import React, { Component } from "react";

import "../sass/index.scss";
import "../res/styles/icon-font.css";

import Navigation from "../components/Navigation";
// import NavBox from "../components/NavBox";
import Header from "../components/Header";
import About from "../components/About";
import Features from "../components/Features";
import Services from "../components/Services";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navigation />
        <Header />
        <About />
        <Features />
        <Services />
        <Booking />
        <Footer />
      </div>
    );
  }
}

export default Home;
