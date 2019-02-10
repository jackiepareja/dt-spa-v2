import React from "react";
import ReactDOM from "react-dom";

import "./sass/index.scss";
import "./res/styles/icon-font.css";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
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

// conditional rendering for form button:

ReactDOM.render(<App />, document.querySelector("#root"));
