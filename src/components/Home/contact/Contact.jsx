import React, { useState } from "react";

const Contact = () => {
  const [inputText, setInputText] = useState("");
  console.log(inputText);

  const handleCountClick = () => {
    alert(inputText.length);
  };

  const handleCountWordClick = () => {
    let count = 0;
    for (let x of inputText) {
      if (x === " ") {
        count += 1;
      }
    }
    alert(count + 1);
  };
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Contact</h1>

      <textarea
        placeholder="Enter your name"
        cols={30}
        rows={10}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button onClick={handleCountClick}>Count Char</button>
      <button onClick={handleCountWordClick}>Count Word</button>
    </div>
  );
};

export default Contact;
