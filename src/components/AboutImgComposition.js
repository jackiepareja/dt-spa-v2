import React, { Component } from "react";

import dogPic1 from "../res/img/pups/dogPic1.jpg";
import dogPic2 from "../res/img/pups/dogPic2.jpeg";
import dogPic3 from "../res/img/pups/dogPic3.jpg";

class AboutImgComposition extends Component {
  render() {
    return (
      <div className="AboutImgComposition">
        <div className="col-md-6">
          <div className="composition">
            <img
              src={dogPic3}
              alt="Carter, black labrador"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={dogPic1}
              alt="Zeus, french bulldog"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={dogPic2}
              alt="Ooma, airdale breed"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutImgComposition;
