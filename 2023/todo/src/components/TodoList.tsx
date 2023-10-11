import { useContext, useMemo, useState } from "react";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

type Props = {
  todo: Todo[];
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = () => {
  const { todo }: Props = useContext(TodoContext);

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

  const analyzeTodo = useMemo((): AnalyzeTodo => {
    const totalCount = todo.length;
    console.log("analyzeTodo 함수 호출");
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);

  type AnalyzeTodo = {
    totalCount: number;
    doneCount: number;
    notDoneCount: number;
  };

  const { totalCount, doneCount, notDoneCount }: AnalyzeTodo = analyzeTodo;

  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <div>
        <div>총 개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        className="search_bar"
        type="text"
        value={search}
        onChange={onChange}
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} todo={it} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
