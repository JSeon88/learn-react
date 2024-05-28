import styled from "styled-components";
import BasicAnimation from "./components/BasicAnimation";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <BasicAnimation />
    </Wrapper>
  );
}

export default App;
