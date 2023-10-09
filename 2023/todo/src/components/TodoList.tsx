import { useState } from "react";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

type Props = {
  todo: Todo[];
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input
        className="search_bar"
        type="text"
        value={search}
        onChange={onChange}
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            todo={{ ...it }}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;