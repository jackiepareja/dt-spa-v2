import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Form from './Form';


class Booking extends Component {
  render() {
    return (
      <div className="Booking">
        <ScrollableAnchor id="bookNow">
          <section className="section-book">
            <div className="row container book-row">
              <Form />
            </div>
          </section>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Booking;
