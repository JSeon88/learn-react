import React from "react";
import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoItem: React.FC<Props> = React.memo(({ todo, onUpdate, onDelete }) => {
  console.log("TodoItem 업데이트");
  const { id, isDone, content, createdDate } = todo;
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
});

export default TodoItem;
