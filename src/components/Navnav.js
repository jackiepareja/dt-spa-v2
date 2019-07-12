import React, { Component} from "react";
import Navigation from "./Navigation";

class Navnav extends Component {

  render() {
    const pages = ['about', 'services', 'book', 'contact'];
    const navLinks = pages.map(page => {
      return (

            <li className="navnav__item">
              <a className="navnav__item---link" href={'#' + page} >{page}</a>
            </li>



        )
    });

    return (<nav>
        <ul className="Navnav_wrapper">
          {navLinks}
        </ul>

    </nav>
    );
  }
}

export default Navnav;
