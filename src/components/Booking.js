import React from "react";

import BookingInfo from "./BookingInfo";

class Booking extends React.Component {
  render() {
    return (
      <div className="Booking">
        <section className="section-book">
          <div className="row container book-row">
            <BookingInfo />
          </div>
        </section>
      </div>
    );
  }
}

export default Booking;
