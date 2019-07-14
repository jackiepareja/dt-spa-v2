import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = props => {
  const fiveStars = [<FontAwesomeIcon className="ReviewCard__stars-star" icon={faStar}/>];
  const allStar = fiveStars.map(allStar => {
    return (
      <div>
      <FontAwesomeIcon className="ReviewCard__stars-star" icon={faStar}/>
      <FontAwesomeIcon className="ReviewCard__stars-star" icon={faStar}/>
      <FontAwesomeIcon className="ReviewCard__stars-star" icon={faStar}/>
      <FontAwesomeIcon className="ReviewCard__stars-star" icon={faStar}/>
      <FontAwesomeIcon className="ReviewCard__stars-star" icon={faStar}/>
      </div>
    )
  });


  return (
    <div className="ReviewCard">
      <div className="ReviewCard__container">
        <h3 className="ReviewCard__name">{props.clientName}</h3>
        <h3 className="ReviewCard__stars">{allStar}</h3>
        <h4 className="ReviewCard__service">{props.clientServ}</h4>
        <h4 className="ReviewCard__highlights">{props.highlight1} {props.highlight2} {props.highlight3}</h4>
        <p className="ReviewCard__text">{props.reviewText}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
