import React from "react";
import { IBooking } from "src/@types";
import bookings from "src/data/bookings.json";
import "src/assets/css/booking.css";

const Bookings: React.FC = () => {
  const [bookingsToShow, setBookingsToShow] =
    React.useState<IBooking[]>(bookings);

  const handleDelete = (id: string) => {
    const newBookings = bookingsToShow.filter((booking) => booking.id !== id);
    setBookingsToShow(newBookings);
  };

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookingsToShow
          .sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          )
          .map((booking: IBooking) => {
            const {
              trip: { title, price },
              guests,
              date,
              id,
            } = booking;
            return (
              <li className="booking" data-test-id="booking" key={id}>
                <h3 data-test-id="booking-title" className="booking__title">
                  {title}
                </h3>
                <span data-test-id="booking-guests" className="booking__guests">
                  {guests} guests
                </span>
                <span data-test-id="booking-date" className="booking__date">
                  {new Date(date).toLocaleDateString()}
                </span>
                <span data-test-id="booking-total" className="booking__total">
                  {price} $
                </span>
                <button
                  data-test-id="booking-cancel"
                  className="booking__cancel"
                  title="Cancel booking"
                  onClick={() => handleDelete(id)}
                >
                  <span className="visually-hidden">Cancel booking</span>×
                </button>
              </li>
            );
          })}
      </ul>
    </main>
  );
};

export default Bookings;
