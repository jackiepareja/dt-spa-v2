import React from "react";

import BookingOne from "./BookingOne.js";

class BookingInfo extends React.Component {
  render() {
    return (
      <div className="BookingInfo">
        <div className="book">
          <div className="book__form">
            <form
              action=""
              className="form"
              name="contact"
              method="POST"
              netlify
              netlify-honeypot="bot-field"
            >
              <div className=" u-margin-bottom-medium">
                <h2 className="heading-secondary">Contact Us</h2>
              </div>
              <BookingOne />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingInfo;
