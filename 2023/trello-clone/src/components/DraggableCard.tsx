import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
`;
interface DraggableProps {
  todo: string;
  index: number;
}
const DraggableCard = ({ todo, index }: DraggableProps) => {
  return (
    // draggableId 와 key 값이 같아야 함.
    <Draggable key={todo} draggableId={todo} index={index}>
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
  );
};
export default DraggableCard;
