import React from "react";
import "./Input.css";
const Input = (props) => {


  return (
    <div className="input-container">
      <label htmlFor="">{props.label}: </label>
      <input type={props.type} placeholder={props.text} />
    </div>
  );
};

export default Input;
