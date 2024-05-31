import styled from "styled-components";
// https://www.framer.com/motion/introduction/
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 20px;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  width: 100%;
  height: 200px;
  background-color: white;
  border-radius: 10px;
`;

const Overlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout3 = () => {
  const [isClick, setClick] = useState(false);
  const handleClick = () => {
    setClick(!isClick);
  };
  return (
    <Wrapper onClick={handleClick}>
      <Grid>
        <Box layoutId="box1" />
        <Box />
        <Box />
        <Box />
      </Grid>
      <AnimatePresence>
        {isClick && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box layoutId="box1" style={{ width: 400, height: 300 }} />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Layout3;
