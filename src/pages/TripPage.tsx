import React from "react";
import useRouter from "src/hooks/useRouter";
import trips from "src/data/trips.json";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "src/components/Modal";
import { ITrip } from "src/@types";
import "src/assets/css/tripPage.css";
import NewTrip from "src/components/trip/NewTrip";

const TripPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const { query, navigate } = useRouter();
  const trip = trips.find((trip) => trip.id === query.id);

  useEffect(() => {
    if (!trip) {
      navigate("/");
    }
  }, [navigate, trip]);
  const { title, price, description, image, duration, level } = trip as ITrip;

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <div className="trip">
          <img
            src={image}
            className="trip__img"
            alt="trip"
            data-test-id="trip-details-image"
          />
          <div className="trip__content">
            <div className="trip-info">
              <h3
                className="trip-info__title"
                data-test-id="trip-details-title"
              >
                {title}
              </h3>
              <div className="trip-info__content">
                <span
                  className="trip-info__duration"
                  data-test-id="trip-details-duration"
                >
                  <strong>{duration}</strong> days
                </span>
                <span
                  className="trip-info__level"
                  data-test-id="trip-details-level"
                >
                  {level}
                </span>
              </div>
            </div>
            <div
              className="trip__description"
              data-test-id="trip-details-description"
            >
              {description}
            </div>
            <div className="trip-price">
              <span>Price</span>
              <strong
                className="trip-price__value"
                data-test-id="trip-details-price-value"
              >
                {price} $
              </strong>
            </div>
            <button
              className="trip__button button"
              data-test-id="trip-details-button"
              onClick={handleOpenModal}
            >
              Book a trip
            </button>
          </div>
        </div>
      </main>
      {showModal && (
        <Modal>
          <NewTrip trip={trip as ITrip} onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default TripPage;
