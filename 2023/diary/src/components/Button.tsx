import React from "react";
import "./Button.css";

const Button = ({
  text,
  type,
  onClick,
}: {
  text: string;
  type: string;
  onClick: () => void;
}) => {
  const btn_type = ["positive", "negative"].includes(type) ? type : "default";
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
