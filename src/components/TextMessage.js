import React, { Component } from 'react';

class TextMessage extends Component {
  render() {
    return (
      <div className="form__group">
        <label htmlFor="message">Message</label>
        <textarea
          className="form_textarea"
          id="message" rows="3"
          name="textMessage"
        />
      </div>
    );
  }
}

export default TextMessage;
