import React from "react";
import AboutText from "./AboutText";
import ScrollableAnchor from "react-scrollable-anchor";
import AboutImgComposition from "./AboutImgComposition";

class About extends React.Component {
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
                  <AboutText />
                  <AboutImgComposition />
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
