import React, { useState } from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="main-card-container">
      <div className="title" onClick={() => alert("You Clicked on the title")}>
        <h4>{props.title}</h4>
      </div>
      <div className="slogan">
        <h6>{props.slogan}</h6>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href={props.social.facebook}>Facebook</a>
          </li>
          <li>
            <a href={props.social.instagram}>Instagram</a>
          </li>
          <li>
            <a href={props.social.twitter}>Twitter</a>
          </li>
          <li>
            <a href={props.social.linkedin}>Linkedin</a>
          </li>
          <button onClick={() => shoot("ahmad")}>Shoot</button>
        </ul>
      </div>

      <a href={props.link}>Learn More</a>
    </div>
  );
};

export default Card;
