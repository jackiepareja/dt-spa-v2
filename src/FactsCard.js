import React from "react";

const FactsCard = props => {
  return (
    <div className="FactsCard">
      <div className="col-sm-6 col-md-3">
        <div className="card">
          <img src={props.avatar} className="card-img-top Avatar" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-warning">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// class AboutCard extends React.Component {
//   render() {
//     return (
//       <div className="AboutCard">
//         <div className="col-sm-6 col-md-3">
//           <div className="card">
//             <img src="" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//               <a href="#" className="btn btn-warning">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default FactsCard;
