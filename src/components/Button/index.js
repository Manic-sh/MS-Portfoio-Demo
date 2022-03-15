import React from "react";
import "./style.css";

const NeoButton = ({
  children,
  onClick,
  btnColor = "teal",
  labelColor,
  disabled,
  type,
  style,
  ...props
}) => {
  return <button className="btn">{children || "label"}</button>;
};

export default NeoButton;
