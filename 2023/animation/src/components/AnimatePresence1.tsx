import styled from "styled-components";
// https://www.framer.com/motion/introduction/
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
`;

const boxVariant = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
};

const AnimatePresence1 = () => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <Wrapper>
        {/* 
        AnimatePresence를 사용하면 React 트리에서 컴포넌트가 제거될 때 제거되는 컴포넌트에 애니메이션 효과를 줄 수 있음.
        initial : 초기값
        animate : 컴포넌트가 나타날 때 애니메이션 효과
        exit : 컴포넌트가 제거될 때 애니메이션 효과 
      */}
        <AnimatePresence>
          {isShow ? (
            <Box
              variants={boxVariant}
              initial="initial"
              animate="animate"
              exit="leaving"
            />
          ) : null}
        </AnimatePresence>
        <button onClick={handleClick}>Click me</button>
      </Wrapper>
    </>
  );
};

export default AnimatePresence1;
