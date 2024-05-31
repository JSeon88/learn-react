import styled from "styled-components";
// https://www.framer.com/motion/introduction/
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #ffd8ad;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Circle = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #a0c9e7;
`;

const Layout2 = () => {
  const [isClick, setClick] = useState(false);
  const handleClick = () => {
    setClick(!isClick);
  };
  return (
    /**
     * AnimateSharedLayout 를 사용하여 layoutId
     * https://www.framer.com/docs/animate-shared-layout/#animate-between-components
     *
     * 동일한 layoutId prop을 가진 모션 컴포넌트들 간에 애니메이션을 적용할 수 있음.
     * 따라서 시각적으로 하나의 연속 컴포넌트로 처리됨
     */
    <Wrapper>
      <Box onClick={handleClick}>
        {!isClick && <Circle layoutId="circle" style={{ borderRadius: 50 }} />}
      </Box>
      <Box onClick={handleClick}>
        {isClick && (
          <Circle layoutId="circle" style={{ scale: 1.5, borderRadius: 0 }} />
        )}
      </Box>
    </Wrapper>
  );
};

export default Layout2;
