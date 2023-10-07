/**
 * useRef : 치환 가능한 ref 객체를 작성
 * 2가지 방법으로 사용할 수 있음
 *   1. 데이터 저장
 *      - ref.current 에서 읽거나 치환
 *   2. DOM 참조
 *      - ref.current에 DOM 참조가 설정되어, DOM 함수등 호출 가능
 *
 * ref 객체에 저장된 값은 업데이트되더라도 화면을 다시 그리지 않음
 */
import React, { useState, useRef } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const UPLOAD_DELAY = 5000;

const ImageUploader = () => {
  // 숨겨진 input 요소에 접근하기 위한 ref
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  // 선택된 파일 데이터를 저장하는 ref
  const fileRef = useRef<File | null>(null);
  const [message, setMessage] = useState<string | null>("");

  // '이미지 업로드'라는 텍스트가 클릭됐을 때의 콜백
  const onClickText = () => {
    if (inputImageRef.current !== null) {
      // input의 DOM에 접근해서 클릭 이벤트를 트리거한다.
      inputImageRef.current.click();
    }
  };

  // 파일이 선택된 후에 호출되는 콜백
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null && files.length > 0) {
      // fileRef.current에 값을 저장
      // fileRef.current가 변화해도 다시 그리기가 발생하지 않음
      fileRef.current = files[0];
    }
  };

  // 업로드 버튼이 클랙됏을 때 호출되는 콜백
  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      // API를 호출하고, 파일에 서버에 업로드한다.
      await sleep(UPLOAD_DELAY);
      // 업로드가 성공했음을 표시하기 위해 메시지를 바꿔 씀
      setMessage(`${fileRef.current.name} has been successfully uploaded`);
    }
  };

  return (
    <div>
      <p style={{ textDecoration: "underline" }} onClick={onClickText}>
        이미지 업로드
      </p>
      <input
        ref={inputImageRef}
        type="file"
        accept="image/*"
        onChange={onChangeImage}
        style={{ visibility: "hidden" }}
      />
      <br />
      <button onClick={onClickUpload}>업로드한다</button>
      {message !== null && <p>{message}</p>}
    </div>
  );
};

export default ImageUploader;
