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
                <label for="name" className="form__label">
                  Full name
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label for="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="form__group">
                <input
                  type="radio"
                  id="walk"
                  className="form__radio-group"
                  name="service"
                />
                <label for="walk" className="form__radio-label">
                  <span className="form__radio-button" />
                  Dog Walking
                </label>

                <input
                  type="radio"
                  id="boarding"
                  className="form__radio-group"
                  name="service"
                />
                <label for="boarding" className="form__radio-label">
                  <span className="form__radio-button" />
                  Dog Boarding
                </label>

                <input
                  type="radio"
                  id="checkin"
                  className="form__radio-group"
                  name="service"
                />
                <label for="checkin" className="form__radio-label">
                  <span className="form__radio-button" />
                  Pet Check-in
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingInfo;
