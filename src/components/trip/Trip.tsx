import React from "react";
import { Link } from "react-router-dom";
import { ITrip } from "src/@types";
import "src/assets/css/trip.css";

interface Props {
  trip: ITrip;
}

const Trip: React.FC<Props> = ({ trip }) => {
  const { title, price, image, duration, level, id } = trip;
  return (
    <li data-test-id="trip-card" className="trip-card">
      <img data-test-id="trip-card-image" src={image} alt="trip" />
      <div className="trip-card__content">
        <div className="trip-info">
          <h3 className="trip-info__title" data-test-id="trip-card-title">
            {title}
          </h3>
          <div className="trip-info__content">
            <span
              className="trip-info__duration"
              data-test-id="trip-card-duration"
            >
              <strong>{duration}</strong> days
            </span>
            <span className="trip-info__level" data-test-id="trip-card-level">
              {level}
            </span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong
            className="trip-price__value"
            data-test-id="trip-card-price-value"
          >
            {price} $
          </strong>
        </div>
      </div>
      <Link to={`/trip/${id}`} data-test-id="trip-card-link" className="button">
        Discover a trip
      </Link>
    </li>
  );
};

export default Trip;
