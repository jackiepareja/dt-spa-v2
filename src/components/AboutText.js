import React from "react";

class AboutText extends React.Component {
  render() {
    return (
      <div className="AboutText">
        <div className="col-md-6">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Dog walks like you never have before
          </h3>
          <p className="paragraph">
            Life gets busy, so we aim to make sure that your doggie's schedule
            is packed with fun walks and adventures. From private and relaxed
            walks, to adventurous social group walks, you can live through your
            dog's walks vivaciously!
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">Our Story</h3>
          <p className="paragraph">
            We're a pet services company based in San Francisco and we launched
            in 2017. In just a less than a year, we've grown to almost 100
            doggie clients and 6 tight-knit team members. Our clients have
            regarded us as consistent, safe and trust-worthy. We put a lot of
            time and effort in our walk routes to ensure our walks are enjoyable
            and within the routine.
          </p>

          <a href="/" className="btn-text">
            Learn More &rarr;
          </a>
        </div>
      </div>
    );
  }
}

export default AboutText;
