import React, { Component } from 'react';

class CheckinCheckbox extends Component {
  render() {
    return (
      <div className="form__radio-group">
        <input
          type="checkbox"
          id="checkin"
          className="form__radio-input"
          name="isCheckin"
        />
        <label htmlFor="checkin" className="form__radio-label">
          <span className="form__radio-button" />
          Pet Check-in
        </label>
      </div>
    );
  }
}

export default CheckinCheckbox;
