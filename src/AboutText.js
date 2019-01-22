import React from "react";

class AboutText extends React.Component {
  render() {
    return (
      <div className="AboutText">
        <div className="col-sm-6">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Dog walks like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor amet schlitz cornhole air plant, 90's affogato
            glossier small batch chillwave. Pok pok trust fund tbh bushwick
            schlitz whatever PBR&B. Deep v pinterest vegan chia, blue bottle
            palo santo vape unicorn kinfolk raclette tacos small batch pug.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live through your dog's walks vivaciously
          </h3>
          <p className="paragraph">
            Kickstarter marfa helvetica intelligentsia wayfarers disrupt.
            Freegan hexagon raw denim portland listicle, hell of selvage
            farm-to-table vice letterpress small batch organic kogi tilde
            pickled.
          </p>

          <a href="#" className="btn-text">
            Learn More &rarr;
          </a>
        </div>
      </div>
    );
  }
}

export default AboutText;
