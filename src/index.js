import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Navigation from "./Navigation";
import Header from "./Header";
import About from "./About";
import Facts from "./Facts";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <About />
        <Facts />
        <Contact />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
