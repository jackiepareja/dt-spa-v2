import React, { Component } from 'react';

class WalkingCheckbox extends Component {
  render() {
    return (
        <div className="form__radio-group">
          <input
            type="checkbox"
            id="walk"
            className="form__radio-input"
            name="isWalking"
          />
          <label htmlFor="walk" className="form__radio-label">
            <span className="form__radio-button" />
            Dog Walking
          </label>
        </div>
    );
  }
}

export default WalkingCheckbox;
