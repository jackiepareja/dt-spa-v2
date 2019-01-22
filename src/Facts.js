import React from "react";
import FactsCard from "./FactsCard";
import NinjaImg from "./img/ninja.svg";
import InsuredImg from "./img/insured.svg";
import CalendarImg from "./img/calendar.svg";
import CareImg from "./img/love.svg";

class Facts extends React.Component {
  render() {
    return (
      <div className="Facts">
        <div className="row">
          <FactsCard
            title="Certified"
            text="Our dog handlers receive consistent and industry standard training and must pass and be certified through our dog handler and dog walking courses."
            avatar={NinjaImg}
          />
          <FactsCard
            title="Insured"
            text="Feel at ease with our insured dog walkers, who are extensively trained for any doggie emergencies."
            avatar={InsuredImg}
          />
          <FactsCard
            title="Consistent"
            text="Our dog walkers have built a great rapport with your pal and are set to meet and greet your doggie for their routine. Always feel secure knowing who will be  meeting your pup at your home."
            avatar={CalendarImg}
          />
          <FactsCard
            title="We Care"
            text="Our Dog Tales team and clients are part of the Dog Tales family! We strive for genuine care, compassion and kindness to your pup's wellness and being."
            avatar={CareImg}
          />
        </div>
      </div>
    );
  }
}

export default Facts;
