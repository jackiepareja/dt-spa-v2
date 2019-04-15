import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <input
          type="checkbox"
          id="navi-toggle"
          className="navigation__checkbox"
        />

        <label className="navigation__button" htmlFor="navi-toggle">
          <span className="navigation__icon"> &nbsp; </span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#aboutCompany" className="navigation__link">
                About Dog Tales
              </a>
            </li>
            <li className="navigation__item">
              <a href="#aboutFeatures" className="navigation__link">
                Dog Tales Benefits
              </a>
            </li>
            <li className="navigation__item">
              <a href="#aboutServices" className="navigation__link">
                Services
              </a>
            </li>
            <li className="navigation__item">
              <a href="#bookNow" className="navigation__link">
                Book Now
              </a>
            </li>
            <li className="navigation__item">
              <a href="#checkFooter" className="navigation__link">
                Careers
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
