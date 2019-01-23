import React from "react";

class BookingInfo extends React.Component {
  render() {
    return (
      <div className="BookingInfo">
        <div className="book">
          <div className="book__form">
            <form action="/" className="form">
              <div className=" u-margin-bottom-medium">
                <h2 className="heading-secondary">Start booking now</h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  required
                />
                <label for="name" className="form__label" />

                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label for="email" className="form__label" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingInfo;
