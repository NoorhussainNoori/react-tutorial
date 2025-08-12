import React, { use, useState } from "react";
import "./Playground.css";
import Input from "../../FormComponents/Input";

const Playground = () => {
  const [name, setName] = useState();
  const [lname, setLname] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [favCar, setFavCar] = useState();

  let data = [];

  const returnObject = (name, lname, phone, email, favCar) => {
    return {
      name: name,
      last_name: lname,
      phone: phone,
      email: email,
      car: favCar,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push(returnObject(name, lname, phone, email, favCar));
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
        <select value={favCar} onChange={(e) => setFavCar(e.target.value)}>
          <option value="bmw">BMW</option>
          <option value="toyota">Toyota</option>
          <option value="range-rover">Range Rover</option>
        </select>
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
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Playground;
