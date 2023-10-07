/*
  useState : 상태를 다루기 위한 훅
  useState() :
    반환값 : 배열
      첫번째 : 현재 상태를 유지할 변수
      두번째 : 업데이트 함수 
*/
import { useState } from "react";

type CounterProps = {
  initialValue: number;
};

const Counter = (props: CounterProps) => {
  const { initialValue } = props;
  // 카운트를 유지하는 첫 번재 상태를 useState()로 선언. 인수에는 초기값을 지정
  // count가 현재 상태, setCount가 상태를 업데이트하는 함수
  const [count, setCount] = useState(initialValue);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
    </div>
  );
};

export default Counter;
