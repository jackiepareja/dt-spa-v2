import React from "react";

const services = [
  {
    icon: "./img/dog-brown-tan.svg",
    title: "Dog Walking"
  },
  {
    icon: "./img/dog-brwn-white.svg",
    title: "Dog Boarding"
  },
  {
    icon: "./img/dog-grey-white.svg",
    title: "Dog Sitting"
  },
  {
    icon: "./img/dog-red-brown.svg",
    title: "Pet Check-in"
  }
];

class AboutCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { icon: "", title: "" };

    this.setState({ icon: services.icon });
    this.setState({ title: services.title });
  }

  render() {
    return (
      <div className="AboutCard">
        <div className="col-sm-6 col-md-3">
          <div className="card" style="width: 18rem;">
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-warning">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutCard;
