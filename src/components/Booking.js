import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import BookingInfo from "./BookingInfo";

class Booking extends React.Component {
  render() {
    return (
      <div className="Booking">
        <ScrollableAnchor id="bookNow">
          <section className="section-book">
            <div className="row container book-row">
              <BookingInfo />
            </div>
          </section>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Booking;
