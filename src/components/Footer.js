import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Logo from "../res/img/logo.png";
import Gerardo from "../res/img/gerardo.jpg";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <footer className="footer">
          <div className="footer__logo-box">
            <img src={Logo} alt="Full logo" className="footer__logo" />
          </div>

          <div className="row container u-margin-center">
            <div className="col-sm-6">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#aboutCompany" className="footer__link">
                      Company
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#bookNow" className="footer__link">
                      Contact Us
                    </a>
                  </li>
                  <li className="footer__item">
                    <a
                      href="mailto:pareja.jackie@gmail.com"
                      className="footer__link"
                    >
                      Careers
                    </a>
                  </li>

                  <li className="footer__item">
                    <a href="/" className="footer__link">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <p className="footer__copyright">
                <div className="row container">
                  <div className="col-sm-6">
                    Interested in learning more about Dog Tales or Joining our
                    pack?You can contact us at{" "}
                    <a className="footer__link" href="mailto:ruff@dogtalespack">
                      ruff@dogtalespack
                    </a>{" "}
                    or at
                    <a className="footer__link" href="4153609011">
                      &nbsp; 415-360-9011
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <img
                      className="gerardo-image"
                      src={Gerardo}
                      alt="Gerardo Vinces"
                    />
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div className="row container u-margin-center">
            <div className="col-sm-12 u-text-align-center">
              <p className="footer__item u-margin-top-big">
                Built by{" "}
                <a href="http://www.jackiepareja.com" className="footer__link">
                  Jackie Pareja
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
