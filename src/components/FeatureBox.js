import React from "react";

const FeatureBox = props => {
  return (
    <div className="FeatureBox">
      <div className="col-sm-3">
        <div className="feature-box">
          <i className={props.icon} />
          <h3 className="heading-tertiary u-margin-bottom-small">
            {props.featureTitle}
          </h3>
          <p className="feature-box__text">{props.featureText}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
