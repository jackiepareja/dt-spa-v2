import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Logo from "../res/img/logo.png";
import Gerardo from "../res/img/gerardo.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';


class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <ScrollableAnchor id="checkFooter">
          <footer className="footer">


            <div className="row container u-margin-center">
              <div className="col-sm-6">

                <div className="footer__navigation">
                <div className="footer__logo-box">
                  <img src={Logo} alt="Full logo" className="footer__logo" />
                </div>
                  <ul className="footer__list">
                    <li className="footer__item">
                      <a href="https://www.instagram.com/dogtalespetservices/?hl=en" className="footer__link">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li className="footer__item">
                      <a href="https://www.facebook.com/DogTalesPetServices/" className="footer__link">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li className="footer__item">
                      <a
                        href="ruff@dogtalespack.com"
                        className="footer__link"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>

                    <li className="footer__item">
                      <a href="https://jackiepareja.com" className="footer__link">
                          <FontAwesomeIcon icon={faCode} />
                      </a>
                    </li>

                    <li className="footer__item">
                      <a href="tel:4153771722" className="footer__link">
                          <FontAwesomeIcon icon={faMobile} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="footer__copyright">
                  <div className="row container"><img
                    className="gerardo-image"
                    src={Gerardo}
                    alt="Gerardo Vinces"
                  /></div>
                  <div className="row container">
                  Gerardo Vinces co-founded Dog Tales in 2017. He has a degree in Biology from SFSU
                  and was part of the US Navy after finishing Nuclear Power School. He currently lives
                  in Pacifica, CA with his fiance and two black labradors, Sora &amp; Autumn.

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
