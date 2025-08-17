import { useState } from "react";

const CreateBlogs = () => {
  const [bgColor, setBgColor] = useState("#f3f3f3ff");
  // let favColor = "blue";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: bgColor,
        padding: "20px",
      }}
    >
      <p>My favorite color is {bgColor}</p>
      <button onClick={() => setBgColor("red")}>
        Change Favorite Color To Red
      </button>
      <button onClick={() => setBgColor("white")}>
        Change Favorite Color to White
      </button>
      <button onClick={() => setBgColor("yellow")}>
        Change Favorite Color to Yello
      </button>
    </div>
  );
};

export default CreateBlogs;
