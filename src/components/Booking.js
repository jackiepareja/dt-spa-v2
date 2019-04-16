import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import FormContainer from './FormContainer';


class Booking extends Component {
  render() {
    return (
      <div className="Booking">
        <ScrollableAnchor id="book">
          <section className="section-book">
            <div className="row container book-row">
              <FormContainer />
            </div>
          </section>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Booking;
