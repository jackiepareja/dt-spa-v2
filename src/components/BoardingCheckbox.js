import React, { Component } from 'react';

class BoardingCheckbox extends Component {
  render() {
    return (
      <div className="form__radio-group">
        <input
          type="checkbox"
          id="boarding"
          className="form__radio-input"
          name="isBoarding"
        />
        <label htmlFor="boarding" className="form__radio-label">
          <span className="form__radio-button" />
          Dog Boarding
        </label>
      </div>
    );
  }
}

export default BoardingCheckbox;
