/**
 * 커스텀 훅 : 훅을 사용하는 함수를 새롭게 정의하고, 그것을 함수 컴포넌트의 톱레벨에서 호출 할 수 있음
 *             이런 함수를 구현함으로써 여러 훅을 조합한 커스텀 훅을 구현 할 수 있음
 *
 * useDebugValue : 디버그 용도로 사용되는 훅
 *                 훅이 실행될 때마다 인수의 데이터가 React Developer Tools에 전달되고,
 *                 그 데이터는 React Developer Tools의 Components 탭에서 확인 가능
 */
import React, { useState, useCallback, useDebugValue } from "react";

// input용으로 콜백과 현재의 입력 내용을 모은 훅
const useInput = () => {
  // 현재 입력값을 저장하는 훅
  const [state, setState] = useState("");
  // input이 변화하면, 훅 안의 상황을 업데이트 함
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  // 디버그용으로 값을 출력
  // 값은 개발자 도구의 Components 탭에 표시
  useDebugValue(`input: ${state}`);

  // 현재 입력 내용과 콜백 함수만 반환
  return [state, onChange] as const;
};

const Input = () => {
  const [text, onChangeText] = useInput();
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>input: {text}</p>
    </div>
  );
};

export default Input;
