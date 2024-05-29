import styled from "styled-components";
import BasicAnimation from "./components/BasicAnimation";
import Variants from "./components/Variants";
import Gestures from "./components/Gestures";
import Drag1 from "./components/Drag1";
import Drag2 from "./components/Drag2";
import MotionValues from "./components/MotionValues";
import Scroll from "./components/Scroll";
import SvgPath from "./components/SvgPath";

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
      </Boards>
    </Wrapper>
  );
}

export default App;
