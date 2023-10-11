import React from "react";
import "./App.css";
import { getEmotionImgById } from "./util";

function App() {
  return (
    <div className="App">
      <h1>감정 일기장</h1>
      <img alt="감정1" src={getEmotionImgById("1")}></img>
    </div>
  );
}

export default App;
