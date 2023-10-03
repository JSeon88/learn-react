/**
 * useCallback : 함수를 메모이제이션 하기 위한 훅
 *
 * 메모이제이션 컴포넌트를 사용하면 컴포넌트의 화면 다시 그리기를 억제 할 수 있음
 * 하지만 메모이제이션 컴포넌트에 함수나 객체를 전달하면, 다시 부모의 화면이 다시 그려질 때 컴포넌트 역시 다시 그림
 * useCallback은 함수나 값을 메모이제이션함으로 메모이제이션 컴포넌트에 함수나 객체를 전달해도 화면이 다시 그려지지 않음.
 */
import React, { useState, useCallback } from "react";

type ButtonProps = {
  onClick: () => void;
};

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props;
  console.log("DecrementButton이 다시 그려졌습니다.");
  return <button onClick={onClick}>Decrement</button>;
};

const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;
  console.log("IncrementButton이 다시 그려졌습니다.");
  return <button onClick={onClick}>Increment</button>;
});

const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;
  console.log("DoubleButton이 다시 그려졌습니다.");
  return <button onClick={onClick}>Double</button>;
});

export const Parent = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  // useCallback을 사용해 함수를 메모이제션 함
  const double = useCallback(() => {
    setCount((c) => c * 2);
    // 두번째 인수는 빈 배열이므로 useCallback은 항상 같은 함수를 반환함
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  );
};

export default Parent;
