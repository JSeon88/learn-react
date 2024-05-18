import React, { useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };

  return (
    <div className="todo-list">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write a to do"
          value={todo}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};
export default ToDoList;
