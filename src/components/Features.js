import React from "react";

import FeatureBox from "./FeatureBox";

class Features extends React.Component {
  render() {
    return (
      <div className="Features">
        <section className="section-features">
          <div className="row container u-margin-center">
            <FeatureBox
              icon="icon-basic-star feature-box__icon"
              featureTitle="Trained"
              featureText="Our dog handlers receive consistent and industry standard training
            and must pass and be certified through our dog handler and dog
            walking courses."
            />
            <FeatureBox
              icon="icon-basic-life-buoy feature-box__icon"
              featureTitle="Insured"
              featureText="Feel at ease with our insured dog walkers, who are extensively trained for any doggie emergencies."
            />
            <FeatureBox
              icon="icon-basic-clock feature-box__icon"
              featureTitle="Consistent"
              featureText="Our dog walkers have built a great rapport with your pal and are set to meet and greet your doggie for their routine. Always feel secure knowing who will be meeting your pup at your home."
            />
            <FeatureBox
              icon="icon-basic-heart feature-box__icon"
              featureTitle="We Care"
              featureText="Our Dog Tales team and clients are part of the Dog Tales family! We strive for genuine care, compassion and kindness to your pup's wellness and being."
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Features;
