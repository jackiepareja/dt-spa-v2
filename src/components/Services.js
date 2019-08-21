import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import ServiceCard from "./ServiceCard";

import FieldTrip from "../res/img/pups/dog-walk.jpeg";
import DogBoarding from "../res/img/pups/dog-boarding.jpg";
import DogWalk from "../res/img/pups/pet-checkin.jpeg";

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
                  priceValue1="Solo/On-demand -- $25hr"
                  priceValue2="Group Walk* -- $22hr"
                  priceValue3="Half Hour Walk -- $20hr"
                />
                <ServiceCard
                  background={DogBoarding}
                  serviceTitle="Dog Boarding"
                  serviceInfo1="4-hour Interval potty breaks"
                  serviceInfo2="Sleep in a cozy dog bed"
                  serviceInfo3="Great doggy &amp; human company"
                  priceValue1="Weekend Boarding -- $60/night"
                  priceValue2="7 nights -- $55/night"
                  priceValue3="14 nights or more -- $50/night"
                />
                <ServiceCard
                  background={FieldTrip}
                  serviceTitle="Field Trips & More"
                  serviceInfo1="4h Field Trip"
                  serviceInfo2="One & Two way Cab Service"
                  serviceInfo3="Pet Sitting"
                  priceValue1="4h Field Trip -- $60hr (upon availability)"
                  priceValue2="Cab Service One Way -- $25"
                  priceValue3="Cab Service Two Way -- $45"
                  priceValue4="4h Sitting -- $40/visit"
                />


              </div>
              <div className="services__cta u-margin-center u-margin-top-big">
                <a href="#book" className="btn btn--orange btn--large">
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
