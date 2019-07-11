import React, { Component } from "react";

class NavBox extends Component {

  render() {
    const pages = ['about', 'benefits', 'services', 'book', 'contact'];
    const navLinks = pages.map(page => {
      return (

        <div className="Navigation">
          <input type="checkbox" id="navi-toggle" className="navigation__checkbox" />

          <label className="navigation__button" htmlFor="navi-toggle">
            <span className="navigation__icon"> &nbsp; </span>
          </label>

          <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <a href={'#' + page} className="navigation__link">
                    {page}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )
      
    });

    return <nav>{navLinks}</nav>;
  }
}

export default NavBox;
