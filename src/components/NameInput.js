import React, { Component } from 'react';

const NameInput = (props) => {
  return (
    <div className="form__group">
      <input
        className="form__input"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
      <label htmlFor={props.name} className="form__label">
        Full name
      </label>
    </div>
  )
}


export default NameInput;
