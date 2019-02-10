import React from "react";

const ServiceCard = props => {
  const cardPictureStyle = {
    backgroundImage: `linear-gradient(to right bottom, #ffb900, #ff7730), url(${
      props.background
    })`
  };

  return (
    <div className="ServiceCard">
      <div className="col-sm-4">
        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__picture" style={cardPictureStyle} />
            <h4 className="card__heading">
              <span className="card__heading-span">{props.serviceTitle}</span>
            </h4>

            <div className="card__details">
              <ul>
                <li>{props.serviceInfo1}</li>
                <li>{props.serviceInfo2}</li>
                <li>{props.serviceInfo3}</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-1">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Starting at</p>
                <p className="card__price-value">{props.priceValue}</p>
                <a href="#bookNow" className="btn btn--white btn--large">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
