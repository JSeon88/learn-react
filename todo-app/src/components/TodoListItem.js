import React from 'react';
import './TodoListItem.scss';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem = ({todo, onRemove, onToggle}) => {
  const {id, done, subject} = todo;
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', {done})} onClick={() => onToggle(id)}>
        {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{subject}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
