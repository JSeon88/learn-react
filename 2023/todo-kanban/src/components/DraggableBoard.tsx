import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { Todo, toDoState } from "../atom";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  padding: 10px 10px 20px 10px;
  min-height: 200px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
interface AreaProps {
  /** 드래그한 카드가 떠난 여부 */
  $isDraggingFromThis: boolean;
  /** 드래그한 카드가 오버되어있는 여부 */
  $isDraggingOver: boolean;
}

const Area = styled.div<AreaProps>`
  background-color: ${(props) =>
    props.$isDraggingOver
      ? "#dfe6e9"
      : props.$isDraggingFromThis
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 18px;
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
  margin-bottom: 10px;
`;

interface DraggableBoardProps {
  toDos: Todo[];
  boardId: string;
}

interface Form {
  toDo: string;
}

const DraggableBoard = ({ toDos, boardId }: DraggableBoardProps) => {
  const { register, setValue, handleSubmit } = useForm<Form>();
  const setToDos = useSetRecoilState(toDoState);

  const onValid = ({ toDo }: Form) => {
    setToDos((oldToDos) => {
      return {
        ...oldToDos,
        [boardId]: [{ id: Date.now(), text: toDo }, ...oldToDos[boardId]],
      };
    });
    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            $isDraggingOver={snapshot.isDraggingOver}
            $isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((todo, index) => (
              <DraggableCard
                key={index}
                todoId={todo.id}
                todoText={todo.text}
                index={index}
              />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default DraggableBoard;
