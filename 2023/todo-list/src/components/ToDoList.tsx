import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);
  const [todoList, doingList, doneList] = useRecoilValue(toDoSelector);

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
      <hr />
      <h1>TO_DO</h1>
      <div className="todo-list">
        <ul>
          {todoList.map((todo) => (
            <ToDo key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
      <hr />
      <h1>DOING</h1>
      <div className="todo-list">
        <ul>
          {doingList.map((todo) => (
            <ToDo key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
      <hr />
      <h1>DONE</h1>
      <div className="todo-list">
        <ul>
          {doneList.map((todo) => (
            <ToDo key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default ToDoList;
