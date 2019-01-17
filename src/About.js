import React from "react";

import AboutCard from "./AboutCard";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="row">
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    );
  }
}

export default About;
