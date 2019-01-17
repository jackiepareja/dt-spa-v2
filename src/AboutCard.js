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
          <div className="thumbnail">
            <img src={this.state.icon} />
            <div className="caption">
              <h4>{this.state.title}</h4>

              <p>
                <a href="#" class="btn btn-warning" role="button">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutCard;
