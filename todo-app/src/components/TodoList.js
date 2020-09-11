import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {
  console.log(todos);
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
