import React from "react";

import AboutCard from "./AboutCard";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="row">
          <AboutCard
            title="Certified"
            text="Our dog handlers receive consistent and industry standard training and must pass and be certified through our dog handler and dog walking courses."
            avatar={"img/ninja.svg"}
          />
          <AboutCard
            title="Insured"
            text="Feel at ease with our insured dog walkers, who are extensively trained for any doggie emergencies."
            avatar={"img/insured.svg"}
          />
          <AboutCard
            title="Consistent"
            text="Our dog walkers have built a great rapport with your pal and are set to meet and greet your doggie for their routine. Always feel secure knowing who will be  meeting your pup at your home."
            avatar={"img/calendar.svg"}
          />
          <AboutCard
            title="We Care"
            text="Our Dog Tales team and clients are part of the Dog Tales family! We strive for genuine care, compassion and kindness to your pup's wellness and being."
            avatar={"img/love.svg"}
          />
        </div>
      </div>
    );
  }
}

export default About;
