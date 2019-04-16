import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import ServiceCard from "./ServiceCard";

import DogWalk from "../res/img/pups/dog-walk.jpeg";
import DogBoarding from "../res/img/pups/dog-boarding.jpg";
import PetCheckIn from "../res/img/pups/pet-checkin.jpeg";

class Services extends Component {
  render() {
    return (
      <div className="Services">
        <ScrollableAnchor id="services">
          <section className="section-services">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Wagging Along the Sidewalks</h2>
              <div className="row container u-margin-center u-margin-top-medium">
                <ServiceCard
                  background={DogWalk}
                  serviceTitle="Dog Walking"
                  serviceInfo1="30m to 1h"
                  serviceInfo2="Private walks*"
                  serviceInfo3="Group walks*"
                  priceValue="$25"
                />
                <ServiceCard
                  background={DogBoarding}
                  serviceTitle="Dog Boarding"
                  serviceInfo1="4-hour Interval potty breaks"
                  serviceInfo2="Sleep in a cozy dog bed"
                  serviceInfo3="Great doggy &amp; human company"
                  priceValue="$60"
                />
                <ServiceCard
                  background={PetCheckIn}
                  serviceTitle="Pet Check-In"
                  serviceInfo1="15m Check-ins"
                  serviceInfo2="Potty breaks"
                  serviceInfo3="Short walks"
                  priceValue="$20"
                />
              </div>
              <div className="services__cta u-margin-center u-margin-top-big">
                <a href="#bookNow" className="btn btn--orange btn--large">
                  Book Now!
                </a>
              </div>
            </div>
          </section>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Services;
