import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  padding: 10px 10px 20px 10px;
  min-height: 200px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const Area = styled.div`
  flex-grow: 1;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 18px;
`;

interface DraggableBoardProps {
  toDos: string[];
  boardId: string;
}

const DraggableBoard = ({ toDos, boardId }: DraggableBoardProps) => {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided) => (
          <Area ref={provided.innerRef} {...provided.droppableProps}>
            {toDos.map((todo, index) => (
              <DraggableCard key={index} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default DraggableBoard;
