import React, { useState } from "react";
import { ITrip } from "src/@types";
import "src/assets/css/newTrip.css";

interface Props {
  trip: ITrip;
  onClose: () => void;
}

const NewTrip: React.FC<Props> = ({ trip, onClose }) => {
  const [numOfGuests, setNumOfGuests] = useState(1);
  const todaysDate = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(todaysDate);
  const { title, price, duration, level } = trip;

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumOfGuests(+e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      new Date(date).getTime() >= new Date(todaysDate).getTime() &&
      numOfGuests > 0 &&
      numOfGuests <= 10
    ) {
      onClose();
    }
  };
  return (
    <div className="book-trip-popup" data-test-id="book-trip-popup">
      <button
        data-test-id="book-trip-popup-close"
        className="book-trip-popup__close"
        onClick={onClose}
        type="button"
      >
        ×
      </button>
      <form
        className="book-trip-popup__form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="trip-info">
          <h3 className="trip-info__title" data-test-id="book-trip-popup-title">
            {title}
          </h3>
          <div className="trip-info__content">
            <span
              className="trip-info__duration"
              data-test-id="book-trip-popup-duration"
            >
              <strong>{duration}</strong> days
            </span>
            <span
              className="trip-info__level"
              data-test-id="book-trip-popup-level"
            >
              {level}
            </span>
          </div>
        </div>
        <label className=" input">
          <span className="input__heading">Date</span>
          <input
            data-test-id="book-trip-popup-date"
            name="date"
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={todaysDate}
          />
        </label>
        <label className="input">
          <span className="input__heading">Number of guests</span>
          <input
            data-test-id="book-trip-popup-guests"
            name="guests"
            type="number"
            min={1}
            max={10}
            value={numOfGuests}
            onChange={handleGuestsChange}
            required
          />
        </label>
        <span className="book-trip-popup__total">
          Total:
          <output
            className="book-trip-popup__total-value"
            data-test-id="book-trip-popup-total-value"
          >
            {price * numOfGuests}$
          </output>
        </span>
        <button
          className="button"
          type="submit"
          data-test-id="book-trip-popup-submit"
        >
          Book a trip
        </button>
      </form>
    </div>
  );
};

export default NewTrip;
