// react-beautiful-dnd 의 react18 호환을 위한 포크 버전
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atom";
import DraggableCard from "./components/DraggableCard";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

const Board = styled.div`
  padding: 30px 10px 20px 10px;
  min-height: 200px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) {
      return;
    }
    const newToDos = [...toDos];
    // 이동하는 자리 => 값 삭제
    const [reorderedItem] = newToDos.splice(source.index, 1);
    // 이동하고자 하는 자리에 => 값 삽입
    newToDos.splice(destination.index, 0, reorderedItem);

    setToDos(newToDos);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((todo, index) => (
                  <DraggableCard key={index} todo={todo} index={index} />
                ))}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
