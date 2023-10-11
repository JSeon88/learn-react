import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  // URL 파라미터 값 불러오기
  const params = useParams();
  console.log(params);
  return <div>Diary</div>;
};

export default Diary;
