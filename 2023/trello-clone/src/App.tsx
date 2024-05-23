// react-beautiful-dnd 의 react18 호환을 위한 포크 버전
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";

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

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const toDos = ["a", "b", "c", "d", "e", "f"];
function App() {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((todo, index) => (
                  <Draggable draggableId={todo} index={index}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {todo}
                      </Card>
                    )}
                  </Draggable>
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
