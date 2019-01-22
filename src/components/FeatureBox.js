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

// class FeatureBox extends React.Component {
//   render() {
//     console.log(props);
//     return (
//       <div className="FeatureBox">
//         <div className="col-sm-3">
//           <div className="feature-box">
//             <i className="feature-box__icon icon-basic-star" />
//             <h3 className="heading-tertiary u-margin-bottom-small">
//               {props.featureTitle}
//             </h3>
//             <p className="feature-box__text">
//               Our dog handlers receive consistent and industry standard training
//               and must pass and be certified through our dog handler and dog
//               walking courses.
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default FeatureBox;
