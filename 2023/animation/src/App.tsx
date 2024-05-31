import styled from "styled-components";
import BasicAnimation from "./components/BasicAnimation";
import Variants from "./components/Variants";
import Gestures from "./components/Gestures";
import Drag1 from "./components/Drag1";
import Drag2 from "./components/Drag2";
import MotionValues from "./components/MotionValues";
import Scroll from "./components/Scroll";
import SvgPath from "./components/SvgPath";
import AnimatePresence1 from "./components/AnimatePresence1";
import Slider from "./components/Slider";
import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";

const Wrapper = styled.div`
  height: 120vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

/** 컬럼 3 만큼 병합 */
const SpanColumn = styled.div<{ start: number; span: number }>`
  grid-column: ${(props) => props.start} / span ${(props) => props.span};
`;

function App() {
  return (
    <Wrapper>
      <Boards>
        <BasicAnimation />
        <Variants />
        <Gestures />
        <Drag1 />
        <Drag2 />
        <MotionValues />
        <Scroll />
        <SvgPath />
        <AnimatePresence1 />
        <SpanColumn start={1} span={3}>
          <Slider />
        </SpanColumn>
        <Layout1 />
        <SpanColumn start={2} span={2}>
          <Layout2 />
        </SpanColumn>
      </Boards>
    </Wrapper>
  );
}

export default App;
