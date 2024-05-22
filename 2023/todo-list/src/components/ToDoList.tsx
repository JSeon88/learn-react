import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { CATEGORY, CategoryType } from "../constants/todos";

const ToDoList = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const toDos = useRecoilValue(toDoSelector);

  const handleCategory = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as CategoryType);
  };
  return (
    <>
      <div className="todo">
        <select value={category} onInput={handleCategory}>
          <option value={CATEGORY.TO_DO}>TO_DO</option>
          <option value={CATEGORY.DOING}>DOING</option>
          <option value={CATEGORY.DONE}>DONE</option>
        </select>
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
