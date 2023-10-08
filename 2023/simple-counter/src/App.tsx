import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Event from "./components/Event";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handlerCount = (value: number): void => {
    setCount(count + value);
  };

  const handlerChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={handlerChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Event />}
      </section>
      <section>
        <Controller handlerCount={handlerCount} />
      </section>
    </div>
  );
}

export default App;
