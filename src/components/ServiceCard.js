import React from "react";

const ServiceCard = props => {
  return (
    <div className="ServiceCard">
      <div className="col-sm-4">
        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__picture">
              <img alt="Card Picture" />
            </div>
            <div className="card__heading">Heading</div>

            <div className="card__details">Details</div>
          </div>
          <div className="card__side card__side--back card__side--back-1">
            BACK
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
