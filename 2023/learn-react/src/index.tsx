import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Hello from "./components/Hello";
// import ContextSample from "./components/ContextSample";
import UseStateSample from "./components/UseStateSample";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // 화면에 그릴 TSX 태그를 지정
  <React.StrictMode>
    {/* App은 src/App.tsx로부터 임포트한 것을 사용 */}
    {/* <App /> */}
    <Hello />
    <UseStateSample initialValue={0} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
