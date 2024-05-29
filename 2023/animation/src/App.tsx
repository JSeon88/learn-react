import styled from "styled-components";
import BasicAnimation from "./components/BasicAnimation";
import Variants from "./components/Variants";

const Wrapper = styled.div`
  height: 100vh;
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
      </Boards>
    </Wrapper>
  );
}

export default App;
