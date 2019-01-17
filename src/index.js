import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Navigation from "./Navigation";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
