import React from "react";
import AboutText from "./AboutText";
import AboutImgComposition from "./AboutImgComposition";

class About extends React.Component {
  render() {
    return (
      <div className="About">
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
      </div>
    );
  }
}

export default About;
