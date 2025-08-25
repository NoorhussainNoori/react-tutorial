import React from "react";

const SecondCom = (props) => {
  return (
    <div>
      <h1>From Second Component</h1>
      <h2>{props.name}</h2>
    </div>
  );
};

export default SecondCom;
