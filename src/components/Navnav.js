import React, { Component} from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Navnav extends Component {

  render() {
    const sections = ['about', 'services', 'book', 'reviews', 'policy'];
    const sectionLinks = sections.map(section => {
      return (
            <li className="navnav__item">
              <a className="navnav__item---link" href={'#' + section} >{section}</a>
            </li>
        )
    });

    return (
          <nav>
              <ul className="Navnav_wrapper">
                {sectionLinks}
              </ul>

          </nav>
    );
  }
}

export default Navnav;
