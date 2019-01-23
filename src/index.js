import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./res/styles/icon-font.css";

import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Features />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
