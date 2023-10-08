import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handlerCount = (value: number): void => {
    setCount(count + value);
  };

  const handlerChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("count 업데이트: ", text, count);
  }, [count, text]);

  // 두번째 요소를 전달 안할시
  // 컴포넌트를 렌더링 할 때마다 콜백 함수 실행
  // 실행하면 처음 페이지에 렌더링하는 마운트 시점 한번, 컴포넌트를 리렌더하는 업데이트 시점 한번
  // useEffect(() => {
  //   console.log("컴포넌트 업데이트");
  // });

  // 두번째 요소를 전달하지 않았기 때문에 마운트 시점에도 출력되어야 하지만
  // 마운트 시점에서 출력되지 않도록 useRef 사용
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    } else {
      console.log("컴포넌트 업데이트");
    }
  });

  // 두번째 요소인 의존성 배열에 빈 배열을 넘길 경우
  // 마운트 시점에서만 콜백 함수 실행
  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  // 언마운트 시점을 제어하기 위한 클린업
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡");
    }, 1000);

    // useEffect의 콜백 함수가 실행되기 전이나 컴포넌트가 언무안트하는 시점에 실행
    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    };
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={handlerChangeText} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handlerCount={handlerCount} />
      </section>
    </div>
  );
}

export default App;
