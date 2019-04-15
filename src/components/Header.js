import React, { Component } from "react";

import CTA from "./CTA";
import "../sass/index.scss";

import Logo from "../res/img/logo.png";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="header">
          <div className="header__logo-box">
            <img src={Logo} className="header__logo" alt="logo" />
          </div>

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
