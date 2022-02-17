import React from "react";
import "./button.scss";
function Buttons(props) {
  return <button className={`btn ${props.className}`}>{props.children}</button>;
}

export default Buttons;
