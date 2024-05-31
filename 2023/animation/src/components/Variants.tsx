import styled from "styled-components";
// https://www.framer.com/motion/introduction/
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  // 자식 circle이 한가운데로 이동하네?
  place-self: center;
`;

const boxVariant = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      // https://www.framer.com/motion/transition/#orchestration
      // 부모가 0.5초 후에 끝나기 때문에 0.5초 딜레이를 줌.
      delayChildren: 0.5,
      // 자식 컴포넌트에게 0.2초씩 딜레이를 각각 줌.
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const Variants = () => {
  return (
    <>
      <Box variants={boxVariant} initial="start" animate="end">
        {/* 자식은 부모의 variant 값을 상속 받음. 
        자식의 이름으로 새로운 variant를 만들고 initial과 animate 값이 같은 이름으로 되어있다면 따로 정의 안해줘도 됨
        const circleVariant = {
          start: {},
          end: {}
        }
        예) <Circle variants={circleVariant} />
        */}
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </>
  );
};

export default Variants;
