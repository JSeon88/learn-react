// react-beautiful-dnd 의 react18 호환을 위한 포크 버전
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atom";
import DraggableBoard from "./components/DraggableBoard";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 680px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: 20px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) {
      return;
    }

    const SOURCE_ID = source.droppableId;
    const DESTINATION_ID = destination.droppableId;

    const sourceToDos = [...toDos[SOURCE_ID]];
    // 이동하는 자리 => 값 삭제
    const [reorderedItem] = sourceToDos.splice(source.index, 1);

    const destinationToDos =
      DESTINATION_ID !== SOURCE_ID ? [...toDos[DESTINATION_ID]] : sourceToDos;
    // 이동하고자 하는 자리에 => 값 삽입
    destinationToDos.splice(destination.index, 0, reorderedItem);

    setToDos((oldToDos) => {
      return {
        ...oldToDos,
        [SOURCE_ID]: sourceToDos,
        [DESTINATION_ID]: destinationToDos,
      };
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId, index) => (
            <DraggableBoard
              key={index}
              toDos={toDos[boardId]}
              boardId={boardId}
            />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
