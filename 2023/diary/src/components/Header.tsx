import React from "react";
import "./Header.css";

type Props = {
  title: string;
  leftChild: JSX.Element;
  rightChild: JSX.Element;
};

const Header = ({ title, leftChild, rightChild }: Props) => {
  return (
    <div className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_title">{title}</div>
      <div className="header_right">{rightChild}</div>
    </div>
  );
};

export default Header;
