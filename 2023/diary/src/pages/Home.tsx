import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header
        title={"Home"}
        leftChild={
          <Button
            text={"버튼 텍스트"}
            type={"positive"}
            onClick={() => {
              alert("hi");
            }}
          />
        }
        rightChild={
          <Button
            text={"버튼 텍스트"}
            type={"negative"}
            onClick={() => {
              alert("hi");
            }}
          />
        }
      />
    </div>
  );
};

export default Home;
