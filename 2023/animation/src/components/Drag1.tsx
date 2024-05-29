import styled from "styled-components";
// https://www.framer.com/motion/introduction/
import { motion } from "framer-motion";

// styled components에 framer-motion을 사용
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariant = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { borderRadius: "100px", scale: 1 },
  drag: {
    scale: 0.5,
    backgroundColor: "rgb(195, 255, 104)",
    transition: { duration: 3 },
  },
};

const Drag1 = () => {
  return (
    <>
      {/* 
        drag 를 true 하게 되면 바로 드래그를 사용할 수 있음.
        특정 방향으로만 드래그하기 위해서는 "x" 또는 "y" 를 설정
        예) < motion.div drag="x" / >

        dragSnapToOrigin : true인 경우 드래그 가능한 요소는 드래그를 놓을 때, 원점으로 다시 애니메이션

        whileDrag: 드래그 제스처가 인식되는 동안 애니메이션할 속성 또는 변경 레이블
        backgroundColor를 줄 때는 rgb 값을 주도록 할 것
      */}
      <Box
        drag
        dragSnapToOrigin
        variants={boxVariant}
        whileHover="hover"
        whileTap="click"
        whileDrag="drag"
      />
    </>
  );
};

export default Drag1;
