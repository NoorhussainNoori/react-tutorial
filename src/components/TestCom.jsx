import React from "react";
import SecondCom from "./SecondCom";

const TestCom = (props) => {
  return (
    <div>
      {/* <h1>From First Component</h1>
      <h3>{props.name}</h3> */}
      <SecondCom name={props.name} />
    </div>
  );
};

export default TestCom;
