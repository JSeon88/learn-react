import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';
import './TodoList.scss';

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

TodoList.propTypes = {
  todos: PropTypes.array,
  onRemove: PropTypes.func,
  onToggle: PropTypes.func,
};

export default TodoList;
