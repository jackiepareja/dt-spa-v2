import React, { Component } from 'react';
import WalkingCheckbox from './WalkingCheckbox';
import BoardingCheckbox from './BoardingCheckbox';
import CheckinCheckbox from './CheckinCheckbox';



class CheckBox extends Component {
  render() {
    return (


      <div className="form__group">
        <WalkingCheckbox />
        <BoardingCheckbox />
        <CheckinCheckbox />
      </div>
    );
  }
}

export default CheckBox;
