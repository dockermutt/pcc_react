import React from "react";
import "./Membership.css";

export default function Header(props) {
  return (
    <div className="membership">
      <h1>{props.title}lll</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}
