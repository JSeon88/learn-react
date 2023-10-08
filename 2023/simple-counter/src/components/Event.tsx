import { useEffect } from "react";

const Event = () => {
  useEffect(() => {
    return () => {
      console.log("Event 컴포넌트 언마운트");
    };
  }, []);

  return <div>현재 카운트는 짝수입니다.</div>;
};

export default Event;
