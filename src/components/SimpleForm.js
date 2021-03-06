import React, { Component } from "react";

class SimpleForm extends Component {
  render() {
    return (

      <div className="BookingInfo">
        <div className="book">
          <div className="book__form">
          <div className="SimpleForm">
            <form name="contact" method="post">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Contact Us</h2>
            </div>
            <input type="hidden" name="form-name" value="contact" />
            <div className="form__group">
              <input
                className="form__input"
                name="name"
                placeholder="Full name"
                type="text"
                required
              />
              <label className="form__label">
                Full name
              </label>
            </div>

            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Email address"
                required
                name="email"
              />
              <label htmlFor="email" className="form__label">
                Email address
              </label>
            </div>

            <div className="form__radio-group">
              <input
              id="walking"
                type="checkbox"
                name="needsWalking"
                className="form__radio-input"
              />
              <label htmlFor="walking" className="form__radio-label">
                <span className="form__radio-button" />
                Dog Walking
              </label>
            </div>

            <div className="form__radio-group">
              <input
              id="boarding"
                type="checkbox"
                name="needsBoarding"
                className="form__radio-input"
              />
              <label htmlFor="boarding" className="form__radio-label">
                <span className="form__radio-button" />
                Dog Boarding
              </label>
            </div>

            <div className="form__radio-group">
              <input
              id="misc"
                type="checkbox"
                className="form__radio-input"
                name="needsMisc"
              />
              <label htmlFor="checkin" className="form__radio-label">
                <span className="form__radio-button" />
                Misc
              </label>
            </div>

            <div className="form__group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form_textarea"
                id="message" rows="3"
                name="message"
              />
            </div>

            <div className="form__group">
              <button className="btn btn--orange btn--small" type="submit">Submit</button>
            </div>

            </form>
          </div>

          </div>
        </div>
      </div>


    );
  }
}

export default SimpleForm;
