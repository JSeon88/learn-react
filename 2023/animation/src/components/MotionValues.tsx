import styled from "styled-components";
// https://www.framer.com/motion/introduction/
import { motion, useMotionValue, useTransform } from "framer-motion";
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

const MotionValues = () => {
  const bigBoxRef = useRef<HTMLDivElement>(null);
  /**
   * https://www.framer.com/motion/motionvalue/
   * 
   * MotionValue : 애니메이션 값의 상태(state)와 속도(velocity)를 추적.
   * 모션 컴포넌트는 내부적으로 MotionValues를 사용하여 애니메이션 값의 상태와 속도를 추적. 자동 생성
   * 리액트 리랜더링이 일어나지 않음.
   * 
   * 예)
   * const x = useMotionValue(0)
    < motion.div style={{ x }} />
   */
  const x = useMotionValue(0);

  /**
   * useEffect 로 좌표 확인할 수 있으며
   * useMotionValueEvent 를 사용해 볼 수도 있음.
   * https://www.framer.com/motion/use-motion-value-event/
   * 
   * 예)
   * useMotionValueEvent(x, "change", (x) => {
      console.log("x 좌표 : ", x)
    })
   */
  // useEffect(() => {
  //   x.on("change", (x) => {
  //     console.log("x 좌표 : ", x);
  //   });
  // }, [x]);

  /**
   * https://www.framer.com/motion/use-transform/
   *
   * useTransform 훅을 통해 MotionValues를 연결
   * x(Motion Value) 값을 다른 output 값으로 변환
   * input 과 output 배열의 length는 같아야 함.
   *
   * 예)
   * const scale = useTransform(x, [-80, 0, 80], [2, 1, 0.2])
   * input : [-80, 0, 80]
   * output : [2, 1, 0.2]
   * x 값이 input에 정의된 좌표에 이르면 input => output 값으로 변환
   */
  const rotateZ = useTransform(x, [-80, 80], [-360, 360]);
  const gradient = useTransform(
    x,
    [-80, 80],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );

  return (
    <>
      <BigBox ref={bigBoxRef} style={{ background: gradient }}>
        <Box
          drag="x"
          dragSnapToOrigin
          dragConstraints={bigBoxRef}
          style={{ x, rotateZ }}
        />
      </BigBox>
    </>
  );
};

export default MotionValues;
