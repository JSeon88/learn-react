import styled from "styled-components";
// https://www.framer.com/motion/introduction/
import {
  motion,
  useMotionValue,
  // useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const BigBox = styled(motion.div)`
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
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Scroll = () => {
  // MotionValues.tsx 얘제
  const bigBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-80, 80], [-360, 360]);
  const gradient = useTransform(
    x,
    [-80, 80],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );

  /**
   * https://www.framer.com/motion/use-scroll/
   * useScroll : 진행률 표시기 및 시차 효과와 같은 스크롤 연결 애니메이션을 만드는 데 사용
   */
  const { scrollY } = useScroll();
  // useMotionValueEvent(scrollY, "change", (y) => {
  //   console.log("Page scroll: ", y);
  // });
  const scale = useTransform(scrollY, [0, 200], [1, 3]);
  return (
    <>
      <BigBox ref={bigBoxRef} style={{ background: gradient }}>
        <Box
          drag="x"
          dragSnapToOrigin
          dragConstraints={bigBoxRef}
          style={{ x, rotateZ, scale }}
        />
      </BigBox>
    </>
  );
};

export default Scroll;
