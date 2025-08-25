import { useState, useContext, createContext } from "react";
import { Divider } from "@mui/material";

const clientContext = createContext();

const Component1 = () => {
  return (
    <div>
      <h1>First Component</h1>
      <Component2 />
    </div>
  );
};

const Component2 = () => {
  return (
    <div>
      <h1>Second Component</h1>
      <Component3 />
    </div>
  );
};

const Component3 = () => {
  const cl = useContext(clientContext);
  return (
    <div>
      <h1>Third Component</h1>
      <p>{cl}</p>
    </div>
  );
};

const Appointments = () => {
  const [clienName, setClientName] = useState("Farid");
  return (
    <>
      <h1>Appointments Page</h1>
      <input
        type="text"
        value={clienName}
        onChange={(e) => setClientName(e.target.value)}
      />

      <Divider
        sx={{
          marginY: 2,
        }}
      />
      {/*
      <Component1 client={clienName} /> */}

      <clientContext.Provider value={clienName}>
        <Component1 />
      </clientContext.Provider>
    </>
  );
};

export default Appointments;
