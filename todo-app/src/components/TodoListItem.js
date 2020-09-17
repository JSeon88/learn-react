import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

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

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    subject: PropTypes.string,
  }),
  onRemove: PropTypes.func,
  onToggle: PropTypes.func,
};

export default TodoListItem;
