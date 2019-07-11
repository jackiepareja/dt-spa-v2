import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
// import FormContainer from './FormContainer';
import SimpleForm from "./SimpleForm";

class Booking extends Component {
  render() {
    return (
      <div className="Booking">
        <ScrollableAnchor id="book">
          <section className="section-book">
            <div className="row container book-row">
              <SimpleForm />
            </div>
          </section>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Booking;
