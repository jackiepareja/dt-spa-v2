import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Logo from "../res/img/logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';


class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <ScrollableAnchor id="contact">
          <footer className="footer">


            <div className="row container u-margin-center">
              <div className="col-sm-6">

                <div className="footer__navigation">
                <div className="footer__logo-box">
                  <img src={Logo} alt="Full logo" className="footer__logo" />
                  <br />
                </div>

                </div>
              </div>
              <div className="col-sm-6">
                <div className="footer__copyright">
                  <div className="row container">

                    <p>2017-2019. All Rights Reserved.</p>
                  </div>
                  <div className="row container">
                  <ul className="footer__list">
                  <li className="footer__item">
                    <a
                      href="mailto:ruff@dogtalespack.com"
                      className="footer__link"
                    >
                    <span className="footer__item-text">ruff@dogtalespack.com </span>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </li>



                  <li className="footer__item">
                    <a href="tel:4153609011" className="footer__link">
                        <span className="footer__item-text">415-360-9011</span> <FontAwesomeIcon icon={faMobile} />
                    </a>
                  </li>
                    <li className="footer__item">
                      <a href="https://www.instagram.com/dogtalespetservices/?hl=en" className="footer__link">
                         <span className="footer__item-text">Follow us </span> <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li className="footer__item">
                      <a href="https://www.facebook.com/DogTalesPetServices/" className="footer__link">
                        <span className="footer__item-text">Like us </span> <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>

                  </ul>
                  <br />


                  </div>
                </div>
              </div>
            </div>
            <div className="row container u-margin-center">
              <div className="col-sm-12 u-text-align-center">

              </div>
            </div>
          </footer>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Footer;
