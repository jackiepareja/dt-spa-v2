import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import "./sass/index.scss";
import "./res/styles/icon-font.css";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

const API_PATH =
  "http://localhost:1992/react-contact-form/api/contact/index.php";

class App extends React.Component {
  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
      })
      .catch(error => this.setState({ error: error.message }));
  };

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
