import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="container">
      <div className="left">
        <h2> {props.msg}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          ipsam nihil maiores eum nemo ab labore fuga officia doloribus! Dolorem
          harum neque obcaecati at porro libero, aut esse possimus eligendi.
        </p>
        <button className="btn-primary">Contact</button>
        <button className="btn-secondary">Learn More</button>
      </div>
      <div className="right">
        <img src="" alt="" width={480} height={480} />
        <h5>Profile Image</h5>
      </div>
    </div>
  );
};

export default Hero;
