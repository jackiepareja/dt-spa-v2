import React, { Component } from 'react';

import Form from './Form';

class FormContainer extends Component {

  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
    //console.log('App comp got: ', fields);
  };

  render() {
    return (
      <div className="BookingInfo">
        <div className="book">
          <div className="book__form">
            <Form
              onChange={fields => this.onChange(fields)}
            />
          
          </div>
        </div>
      </div>
    );
  }
}

export default FormContainer;
