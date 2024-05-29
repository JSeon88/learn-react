import styled from "styled-components";
// https://www.framer.com/motion/introduction/
import { motion } from "framer-motion";
import { useRef } from "react";

const BigBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Drag2 = () => {
  const bigBoxRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {/* 
        dragConstraints : 허용된 드래그 가능 영역에 제약 조건을 적용
        
        1. 픽셀 이용
          < motion.div drag="x" dragConstraints={{ left: 0, right: 300 }}/ >

        2. ref 이용
          < motion.div ref={constraintsRef}>
            < motion.div drag dragConstraints={constraintsRef} />
          < /motion.div>
      */}
      <BigBox ref={bigBoxRef}>
        {/* <Box drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} /> */}
        <Box drag dragConstraints={bigBoxRef} />
      </BigBox>
    </>
  );
};

export default Drag2;
