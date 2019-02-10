import React from "react";

import Logo from "../res/img/logo.png";

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
                    <a href="/" className="footer__link">
                      Company
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="/" className="footer__link">
                      Contact Us
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="/" className="footer__link">
                      Careers
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="/" className="footer__link">
                      Privacy Policy
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
                Locations: Balboa Park, Bernal Heights, Castro, Glen Park,
                Marina, Mission, Mission Bay, Noe Valley, Financial District,
                South of Market, South Beach, Parkmerced, Sunset, Potrero Hill,
                Union Square, Vis Valley. Inquire for more Info.
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
