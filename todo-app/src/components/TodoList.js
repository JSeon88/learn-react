import React, {useCallback} from 'react';
import {List} from 'react-virtualized';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {
  console.log(todos);
  const rowRender = useCallback(
    ({index, key, style}) => {
      //const todo = todo[index];
      return (
        <div className="TodoList">
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onRemove={onRemove}
              onToggle={onToggle}
              style={style}
            />
          ))}
        </div>
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRender}
      list={todos}
      style={{outline: 'none'}}
    />
  );
};

// TodoList.propTypes = {
//   todos: PropTypes.array.shape({
//     id: PropTypes.number,
//     done: PropTypes.bool,
//     subject: PropTypes.string,
//   }),
//   onRemove: PropTypes.func.isRequired,
//   onToggle: PropTypes.func.isRequired,
// };

export default React.memo(TodoList);
