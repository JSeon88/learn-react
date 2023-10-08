import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input
        className="search_bar"
        type="text"
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="list_wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
