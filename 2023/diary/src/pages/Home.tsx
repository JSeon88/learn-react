import React from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  // 쿼리 스트링으로 값 불러오기
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort"));
  return <div>Home</div>;
};

export default Home;
