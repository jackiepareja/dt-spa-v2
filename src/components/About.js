import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import AboutCompany from "./AboutCompany";

class About extends Component {
  render() {
    return (
      <div className="About">
        <ScrollableAnchor id="aboutCompany">
          <main>
            <section className="section-about">
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">Adventurous Walks</h2>
              </div>

              <div className="container">
                <div className="row">
                  <AboutCompany />
                  
                </div>
              </div>
            </section>
          </main>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default About;
