import React from "react";

class BookingOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      mailSent: false,
      error: null
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

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
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
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
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label for="email" className="form__label">
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
              value={this.state.walk}
              onChange={e => this.setState({ walk: e.target.value })}
            />
            <label for="walk" className="form__radio-label">
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
              value={this.state.boarding}
              onChange={e => this.setState({ boarding: e.target.value })}
            />
            <label for="boarding" className="form__radio-label">
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
              value={this.state.checkin}
              onChange={e => this.setState({ checkin: e.target.value })}
            />
            <label for="checkin" className="form__radio-label">
              <span className="form__radio-button" />
              Pet Check-in
            </label>
          </div>
        </div>

        <div className="form__group">
          <label for="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            className="form__textarea"
            onChange={e => this.setState({ message: e.target.value })}
          />
        </div>

        <div className="form__group">
          <button
            className="btn btn--orange btn--small"
            onClick={e => this.handleFormSubmit(e)}
          >
            {" "}
            Submit &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default BookingOne;
