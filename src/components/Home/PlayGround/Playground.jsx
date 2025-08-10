import React, { useState } from "react";
import "./Playground.css";
import Input from "../../FormComponents/Input";

const Playground = () => {
  const [name, setName] = useState();
  const [lname, setLname] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  let data = [];

  const returnObject = (name, lname, phone, email) => {
    return {
      name: name,
      last_name: lname,
      phone: phone,
      email: email,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push(returnObject(name, lname, phone, email));
    console.log(data);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {/* <Input type="text" text="Enter your name" label="Name" />
        <Input type="text" text="Enter your last name" label="Last Name" />
        <Input type="tel" text="Enter your phone number" label="Phone" />
        <Input type="number" text="Enter your Age" label="Age" /> */}

        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Enter your phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>

      <div className="display">
        {data.length > 0
          ? data.map((d) => {
              return (
                <p>
                  {d.name} {d.last_name} {d.phone} {d.email}
                </p>
              );
            })
          : "No Data Available"}
      </div>
    </div>
  );
};

export default Playground;
