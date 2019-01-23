import React from "react";

import ServiceCard from "./ServiceCard";

class Services extends React.Component {
  render() {
    return (
      <div className="Services">
        <section className="section-services">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Wagging Along the Sidewalks</h2>
            <div className="row container u-margin-center">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
