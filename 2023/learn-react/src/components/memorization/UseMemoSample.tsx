/**
 * useMemo : 값을 메모이제이션
 *           첫번째 인수 : 값을 생성하는 함수
 *           두번째 인수 : 의존 배열
 */
import React, { useState, useMemo } from "react";

const UseMemoSample = () => {
  // text는 현재의 텍스트 박스의 내용을 저장
  const [text, setText] = useState("");
  // items는 문자열 리스트를 저장
  const [items, setItems] = useState<string[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    setItems((prevItems) => {
      // 현재의 입력값을 items에 추가. 이때, 새로운 배열을 작성해서 저장함
      return [...prevItems, text];
    });

    setText("");
  };

  // numberOfCharacters1은 다시 그릴 때마다 items.reduce를 실행해서 결과를 얻음
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0);
  // numberOfCharacters2는 useMemo를 사용해, items가 업데이트 되는 시점에 items.reduce를 실행해서 결과를 얻음
  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0);
    // 두번째 인수의 배열 안에 items가 있으므로 items가 새롭게 됏을 때만 함수를 실행해서 메모를 업데이트 함
  }, [items]);

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1 : {numberOfCharacters1}</p>
        <p>Total Number of Characters 2 : {numberOfCharacters2}</p>
      </div>
    </div>
  );
};

export default UseMemoSample;
