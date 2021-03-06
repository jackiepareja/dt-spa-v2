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
            <div className="footer-top-border row container u-margin-center">

              <div className="col-sm-4 u-center-text">
                <div className="footer__navigation">
                  <div className="footer__logo-box">
                    <img src={Logo} alt="Dog Tales logo" className="footer__logo" />
                    <br />
                    <br />
                    <p> &copy; 2020 Dog Tales Pet Services <br/> All Rights Reserved </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="footer__copyright">
                  <h4 className="u-center-text">Hours of Operation</h4>
                  <ul className="footer__list">
                    <li className="footer__item">
                      <span className="footer__item-text">Monday - Friday: 8:00 am to 5:00 pm</span>
                    </li>
                    <li className="footer__item">
                      <span className="footer__item-text">Saturday: 8:00 am to 3:00 pm</span>
                    </li>
                    <li className="footer__item">
                      <span className="footer__item-text">Sunday: Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="footer__copyright">
                  <h4 className="u-center-text">Contact Us</h4>
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
          </footer>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Footer;
