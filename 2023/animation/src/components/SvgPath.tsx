import { motion } from "framer-motion";
import styled from "styled-components";

const Svg = styled(motion.svg)`
  width: 200px;
  height: 200px;
`;

const SvgPath = () => {
  return (
    <>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <motion.path
          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
          // 선
          stroke="white"
          // 선 두께
          strokeWidth={2}
          /**
           * https://www.framer.com/motion/examples/#line-drawing
           * pathLength : Line drawing 애니메이션을 줄 수 있음.
           */
          initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }}
          animate={{ pathLength: 2, fill: "rgba(255, 255, 255, 1)" }}
          /**
           *  transition={{duration: 2}}
           *  으로 준다면 애니메이션에 모두 같은 duration 값이 적용됨.
           */
          transition={{
            // 기본 트랜지션 값
            default: { duration: 5 },
            // fill 옵션에 따로 트랜지션 적용
            fill: { duration: 2, delay: 2 },
          }}
        />
      </Svg>
    </>
  );
};

/**
 * variants로 설정할 수도 있음.
 * 
 * const Svg = styled.svg`
    width: 300px;
    height: 300px;
    path {
      stroke: white;
      stroke-width: 2;
    }
  `;

  const svgVariants = {
    start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
    end: {
      fill: "rgba(255, 255, 255, 1)",
      pathLength: 1,
    },
  };

  <motion.path
    variants={svg}
    initial="start"
    animate="end"
    transition={{
      default: { duration: 5 },
      fill: { duration: 1, delay: 3 },
    }}
  ></motion.path>
 * 
 */

export default SvgPath;
