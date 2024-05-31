import styled from "styled-components";
import prevIcon from "../assets/chevron-left-solid.svg";
import nextIcon from "../assets/chevron-right-solid.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    fill: white;
  }
`;

const Box = styled(motion.div)`
  width: 250px;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  // absolute를 안주니까 initial 애니메이션때 뚝뚝 끊기는 느낌이 있었음.
  position: absolute;
  left: 30%;
`;

const variants = {
  initial: (isBack: boolean) => ({
    // prev(이전) 버튼이라면 x 좌표 -200(왼쪽) 에서 부터 시작
    // next(다음) 버튼이라면 x 좌표 200(오른쪽) 에서 부터 시작
    x: isBack ? -200 : 200,
    opacity: 0,
    scale: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
  exit: (isBack: boolean) => ({
    // prev(이전) 버튼이라면 x 좌표 200(오른쪽) 으로 제거
    // next(다음) 버튼이라면 x 좌표 -200(왼쪽) 으로 제거
    x: isBack ? 200 : -200,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 },
  }),
};

const Slider = () => {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const handlePrevClick = () => {
    setIsBack(true);
    setVisible((oldValue) => (oldValue === 1 ? 10 : oldValue - 1));
  };
  const handleNextClick = () => {
    setIsBack(false);
    setVisible((oldValue) => (oldValue === 10 ? 1 : oldValue + 1));
  };
  return (
    <>
      <Wrapper>
        <IconButton onClick={handlePrevClick}>
          <img src={prevIcon} />
        </IconButton>
        {/* 
          https://www.framer.com/motion/component/###custom
          custom : 각 애니메이션 구성요소에 대해 동적 변형을 다르게 해결하는 데 사용할 맞춤 데이터

          Box에 custom 데이터를 넘겨주고 AnimatePresence 에도 custom 데이터를 넘겨주어야 함.
          variants에서 custom 데이터로 사용했던 isBack을 props로 받기 위해서 Box에 custom 데이터를 넘겨줌.
        */}
        <AnimatePresence custom={isBack}>
          {
            // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
            // visible === i ? (
            <Box
              // key={i}
              key={visible}
              custom={isBack}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {visible}
            </Box>
            // ) : null
            // )
          }
        </AnimatePresence>
        <IconButton onClick={handleNextClick}>
          <img src={nextIcon} />
        </IconButton>
      </Wrapper>
    </>
  );
};

export default Slider;
