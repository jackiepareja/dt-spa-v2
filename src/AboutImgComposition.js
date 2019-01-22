import React from "react";

import dogPic1 from "./img/pups/dogPic1.jpg";
import dogPic2 from "./img/pups/dogPic2.jpeg";
import dogPic3 from "./img/pups/dogPic3.jpg";

class AboutImgComposition extends React.Component {
  render() {
    return (
      <div className="AboutImgComposition">
        <div className="col-sm-6">
          <div className="composition">
            <img
              src={dogPic3}
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={dogPic1}
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={dogPic2}
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutImgComposition;
