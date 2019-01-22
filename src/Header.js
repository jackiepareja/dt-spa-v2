import React from "react";

import CTA from "./CTA";

import "./index.css";
import "./img/hero.jpg";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <header className="headerMain">
          <div className="header__logo-box" />

          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Outdoors </span>
              <span className="heading-primary--sub">
                is where a dog's life happens
              </span>
            </h1>

            <CTA />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
