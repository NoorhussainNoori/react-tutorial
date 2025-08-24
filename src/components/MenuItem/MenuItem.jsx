import React from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  const Icon = props.icon;
  return (
    <Link
      to={props.route}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
        color: "#0f97ffff",
        padding: "8px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Icon />
      {props.name}
    </Link>
  );
};

export default MenuItem;
