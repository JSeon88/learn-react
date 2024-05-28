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
  margin-right: 10px;
`;

const myVariant = {
  start: {
    scale: 0,
  },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

const BasicAnimation = () => {
  return (
    <>
      {/* 크롬에서 transition값을 넣지 않으면 작동 안되는 이슈 있음. 
      <motion.div> 사이에 텍스트 넣으면 작동함.*/}
      {/* <Box
        transition={{ type: "spring", delay: 0.5 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
      /> */}
      <Box variants={myVariant} initial="start" animate="end" />
      {/* 기본 사용은 아래와 같음 */}
      {/* <motion.div></motion.div> */}
    </>
  );
};

export default BasicAnimation;
