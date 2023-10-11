import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* 브라우저의 주소 변경을 감지 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
