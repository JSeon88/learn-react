import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// 어떠한 상황에서도 리렌더링 할 필요가 없기 때문에 React.memo 처리
export default React.memo(Header);
