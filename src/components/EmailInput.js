import React, { Component } from 'react';

class EmailInput extends Component {
  render() {
    return(
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="Email address"
          id="email"
          required
          name="email"
        />
        <label htmlFor="email" className="form__label">
          Email address
        </label>
      </div>

    );
  }
}

export default EmailInput;
