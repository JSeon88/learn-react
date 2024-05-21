import { useRecoilValue } from "recoil";
import { toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);

  return (
    <>
      <div className="todo">
        <h1>ToDo List</h1>
        <div>
          <CreateToDo />
        </div>
      </div>
      <div className="todo-list">
        <ul>
          {toDos.map((todo) => (
            <ToDo key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default ToDoList;
