import { Draggable } from "@hello-pangea/dnd";
import { memo } from "react";
import styled from "styled-components";

const Card = styled.div<{ $isDragging: boolean }>`
  background-color: ${(props) =>
    props.$isDragging ? "#e4f2ff" : props.theme.cardColor};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: ${(props) =>
    props.$isDragging ? "0 0 5px 0 rgba(0, 0, 0, 0.25)" : "none"};
`;
interface DraggableProps {
  todoId: number;
  todoText: string;
  index: number;
}
const DraggableCard = memo(({ todoId, todoText, index }: DraggableProps) => {
  return (
    // draggableId 와 key 값이 같아야 함.
    <Draggable key={todoId} draggableId={todoId + ""} index={index}>
      {(provided, snapshot) => (
        <Card
          $isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todoText}
        </Card>
      )}
    </Draggable>
  );
});

export default DraggableCard;
