import React from "react";
import "./Button.css";

const Button = ({
  text,
  type,
  onClick,
}: {
  text: string;
  type?: string;
  onClick?: () => void;
}) => {
  let btn_type = "default";
  if (type) {
    btn_type = ["positive", "negative"].includes(type) ? type : btn_type;
  }

  return (
    <button
      className={["Button", `Button_${btn_type}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
