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
};

const Gestures = () => {
  return (
    <>
      {/* 
      https://www.framer.com/motion/gestures/
      whileHover : 마우스가 오버 됐을 때 이벤트
      whileTap : 마우스가 클랙 됐을 때 이벤트 */}
      <Box variants={boxVariant} whileHover="hover" whileTap="click" />
    </>
  );
};

export default Gestures;
