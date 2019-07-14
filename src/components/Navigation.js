import React, { Component } from "react";

class Navigation extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {isToggleOn: true};
  //
  //   this.exitClick = this.exitClick.bind(this);
  // }
  //
  // exitClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //
  //   }));
  // }






  render() {
  // this.state.isToggleOn ? navBG.classList.add('hideNav') : navBG.classList.remove('hideNav');


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

        <div id="navBG" className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">

              <li htmlFor="navi-toggle" className="navigation__item">


                <a href="#about" className="navigation__link nav_close">
                  About Dog Tales
                </a>
              </li>
              <li className="navigation__item">
                <a href="#services" className="navigation__link">
                  Services
                </a>
              </li>
              <li className="navigation__item">
                <a href="#book" className="navigation__link">
                  Book Now
                </a>
              </li>
              <li className="navigation__item">
                <a href="#reviews" className="navigation__link">
                  Reviews
                </a>
              </li>


            </ul>
          </nav>
        </div>
    );
  }
}

export default Navigation;
