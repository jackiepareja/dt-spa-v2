import React from "react";

class BookingOne extends React.Component {
  render() {
    return (
      <div className="BookingOne">
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Full name"
            id="name"
            required
          />
          <label htmlFor="name" className="form__label">
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
          <label htmlFor="email" className="form__label">
            Email address
          </label>
        </div>

        <div className="form__group ">
          <div className="form__radio-group">
            <input
              type="radio"
              id="walk"
              className="form__radio-input"
              name="service"
            />
            <label htmlFor="walk" className="form__radio-label">
              <span className="form__radio-button" />
              Dog Walking
            </label>
          </div>

          <div className="form__radio-group">
            <input
              type="radio"
              id="boarding"
              className="form__radio-input"
              name="service"
            />
            <label htmlFor="boarding" className="form__radio-label">
              <span className="form__radio-button" />
              Dog Boarding
            </label>
          </div>

          <div className="form__radio-group">
            <input
              type="radio"
              id="checkin"
              className="form__radio-input"
              name="service"
            />
            <label htmlFor="checkin" className="form__radio-label">
              <span className="form__radio-button" />
              Pet Check-in
            </label>
          </div>
        </div>

        <div className="form__group">
          <label htmlFor="message">Message</label>
          <textarea className="form_textarea" id="message" rows="3" />
        </div>

        <div className="form__group">
          <button className="btn btn--orange btn--small">
            {" "}
            Submit &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default BookingOne;
