import React from "react";

class AboutCard extends React.Component {
  render() {
    return (
      <div className="AboutCard">
        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img src="https://via.placeholder.com/171x180" />
            <div className="caption">
              <h3>Thumbnail label</h3>
              <p>...</p>
              <p>
                <a href="#" class="btn btn-primary" role="button">
                  Button
                </a>{" "}
                <a href="#" class="btn btn-default" role="button">
                  Button
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
