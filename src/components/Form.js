import React, { Component } from 'react';

import FormTitle from './FormTitle';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import CheckBox from './CheckBox';
import TextMessage from './TextMessage';
import Submit from './Submit';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientMessage: {
        name: '',
        email: '',
        services: '',
        message: ''
      }
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleFormSubmit() {

  }

  handleClearForm() {

  }

  handleFullName(e) {
    let value = e.target.value;
    this.setState( prevState => ({
      clientMessage: {
        ...prevState.clientMessage,
        name: value
      }
    }))
  }

  render() {
    return (
      <div className="BookingInfo">
        <div className="book">
          <div className="book__form">
            <form>
              <FormTitle />
              <NameInput
                type={'text'}
                value={this.state.clientMessage}
                placeholder={'Full name'}
                handleChange = {this.handleFullName}
              />
              <EmailInput />
              <CheckBox />
              <TextMessage />
              <Submit />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
