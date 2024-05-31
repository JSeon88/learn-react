import styled from "styled-components";
// https://www.framer.com/motion/introduction/
import { motion } from "framer-motion";
import { useState } from "react";

// styled components에 framer-motion을 사용
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #e8fcfd;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  gap: 10px;
`;

const Circle = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #27e2e7;
`;

const Layout1 = () => {
  const [isClick, setClick] = useState(false);
  const handleClick = () => {
    setClick(!isClick);
  };
  return (
    <>
      <Box
        style={
          isClick
            ? { justifyContent: "center", alignItems: "center" }
            : { justifyContent: "flex-start", alignItems: "flex-start" }
        }
        onClick={handleClick}
      >
        {/* 
          https://www.framer.com/motion/layout-animations/
          
          true인 경우 이 컴포넌트는 레이아웃이 변경될 때 새 위치에 자동으로 애니메이션을 적용
        */}
        <Circle layout />
      </Box>
    </>
  );
};

export default Layout1;
