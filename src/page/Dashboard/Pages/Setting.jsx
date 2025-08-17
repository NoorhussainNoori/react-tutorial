import React, { useState } from "react";

const Setting = () => {
  const [bgColor, setBgColor] = useState("#f4a4a4");
  const [textColor, setTextColor] = useState("#ffffff");

  const styles = {
    settingContainer: {
      height: "100vh",
      width: "400%",
      color: textColor,
      backgroundColor: bgColor,
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
  };
  return (
    <div style={styles.settingContainer}>
      <h1>Hello from Setting Page</h1>
      <label htmlFor="">Select Background Color</label>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />
      <label htmlFor="">Select Text Color</label>
      <input
        type="color"
        value={textColor}
        id=""
        onChange={(e) => setTextColor(e.target.value)}
      />
    </div>
  );
};

export default Setting;
