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
        <ScrollableAnchor id="contact">
          <footer className="footer">


            <div className="row container u-margin-center">
              <div className="col-sm-6">

                <div className="footer__navigation">
                <div className="footer__logo-box">
                  <img src={Logo} alt="Full logo" className="footer__logo" />
                  <br /> <p>2017-2019. All Rights Reserved.</p>
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
                  Dog Tales was founded based on how I would want my dog's to be cared for while I was away.
                  We value our doggy clients and ensure that they're time with us is meaningful.
                  We hope you enjoy our services!
                  <br />
                  -- <a className="footer__gerardo" href="https://www.linkedin.com/in/gvinces/">Gerardo Vinces</a> <br />
                  Co-founder of Dog Tales

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
