import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <Button
        text={"버튼 텍스트"}
        type={"positive"}
        onClick={() => {
          alert("hi");
        }}
      />
    </div>
  );
};

export default Home;
