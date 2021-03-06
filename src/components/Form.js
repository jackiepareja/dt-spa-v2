import React, { Component } from 'react';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      needsWalking: '',
      needsBoarding: '',
      needsCheckin: '',
      message: ''
    };
  }


  change = (e) => {
    this.props.onChange({
      [e.target.name]: e.target.value

    });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  checkboxChange = (e) => {
    this.props.onChange({
      [e.target.name]: e.target.checked
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({
      fullName: '',
      email: '',
      needsWalking: '',
      needsBoarding: '',
      needsCheckin: '',
      message: ''
    });
    this.props.onChange({
      fullName: '',
      email: '',
      needsWalking: '',
      needsBoarding: '',
      needsCheckin: '',
      message: ''
    });

    fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...this.state })
  })
    .then(() => alert("Success!"))
    .catch(error => alert(error));


  };

  render() {
    return (
      <form name="contact" netlify-honeypot="bot-field">

      <div className="u-margin-bottom-medium">
        <h2 className="heading-secondary">Contact Us</h2>
      </div>

      <div className="form__group">
        <input
          className="form__input"
          name="fullName"
          placeholder="Full name"
          type="text"
          value={this.state.fullName}
          onChange={e => this.change(e)}
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
          value={this.state.email}
          onChange={e => this.change(e)}
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
          value={this.state.needsWalking}
          onChange={e => this.checkboxChange(e)}
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
          value={this.state.needsBoarding}
          onChange={e => this.checkboxChange(e)}
        />
        <label htmlFor="boarding" className="form__radio-label">
          <span className="form__radio-button" />
          Dog Boarding
        </label>
      </div>

      <div className="form__radio-group">
        <input
        id="checkin"
          type="checkbox"
          className="form__radio-input"
          name="needsCheckin"
          value={this.state.needsCheckin}
          onChange={e => this.checkboxChange(e)}
        />
        <label htmlFor="checkin" className="form__radio-label">
          <span className="form__radio-button" />
          Pet Check-in
        </label>
      </div>

      <div className="form__group">
        <label htmlFor="message">Message</label>
        <textarea
          className="form_textarea"
          id="message" rows="3"
          name="message"
          value={this.state.message}
          onChange={e => this.change(e)}
        />
      </div>

      <div className="form__group">
        <button className="btn btn--orange btn--small" onClick={(e) => this.onSubmit(e)} >Submit</button>
      </div>

      <div>
        {this.state.mailSent &&
          <div>Thank you! We'll get back to with your message.</div>
        }
      </div>


      </form>
    )
  }
}

export default Form;
