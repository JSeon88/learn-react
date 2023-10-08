import { Todo } from "../types/todo";

const TodoItem: React.FC<Todo> = ({ id, isDone, content, createdDate }) => {
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
