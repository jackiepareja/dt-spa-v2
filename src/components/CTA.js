import React, { Component } from "react";

import "../sass/index.scss";

class CTA extends Component {
  render() {
    return (
      <div className="CTA">
        <a href="#bookNow" className="btn btn--white btn--animated btn--large">
          Book A Walk
        </a>
      </div>
    );
  }
}

export default CTA;
