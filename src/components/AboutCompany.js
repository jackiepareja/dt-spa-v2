import React, { Component } from 'react';

import AboutText from "./AboutText";
import AboutImgComposition from "./AboutImgComposition";

class AboutCompany extends Component {
  render() {
    return (
      <div className="AboutCompany">
        <AboutText />
        <AboutImgComposition />
      </div>
    )
  }
}

export default AboutCompany;
