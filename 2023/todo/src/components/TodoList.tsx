import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

type Props = {
  todo: Todo[];
};

const TodoList: React.FC<Props> = ({ todo }) => {
  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input
        className="search_bar"
        type="text"
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="list_wrapper">
        {todo.map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
