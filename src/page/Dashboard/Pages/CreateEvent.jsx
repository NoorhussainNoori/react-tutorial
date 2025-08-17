import React, { useState } from "react";

const CreateEvent = () => {
  const [justify, setJustify] = useState("center");

  // const justify = "start"; // default value
  // what does use state do?
  // useState is a React hook that allows you to add state to functional components.
  // what is the role of usestate in justify?
  // The useState hook initializes the justify state variable with a default value of "start".

  const styles = {
    containerMain: {
      margin: "10px",
      display: "flex",
      justifyContent: justify,
      gap: "10px",
      width: "100%",
      height: "30vh",
      alignItems: "center",
      // backgroundColor: "#fd0000ff",
    },
    subContainers: {
      backgroundColor: "#f3f3f3ff",
      height: "100px",
      width: "100px",
      padding: "10px",
      border: "1px solid black",
    },
  };
  return (
    <>
      <div className="container" style={styles.containerMain}>
        <div className="sub-containers" style={styles.subContainers}>
          One
        </div>
        <div className="sub-containers" style={styles.subContainers}>
          Two
        </div>
        <div className="sub-containers" style={styles.subContainers}>
          Three
        </div>
        <div className="sub-containers" style={styles.subContainers}>
          Four
        </div>
        <div className="sub-containers" style={styles.subContainers}>
          Five
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => setJustify("center")}>
          Justify Content: Center
        </button>
        <button onClick={() => setJustify("space-between")}>
          Justify Content: Space Between
        </button>
        <button onClick={() => setJustify("space-around")}>
          Justify Content: Space Around
        </button>
        <button onClick={() => setJustify("space-evenly")}>
          Justify Content: Space Evenly
        </button>
        <button onClick={() => setJustify("start")}>
          Justify Content: Start
        </button>
        <button onClick={() => setJustify("end")}>Justify Content: End</button>
      </div>
    </>
  );
};

export default CreateEvent;
