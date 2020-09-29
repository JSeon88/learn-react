import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
  const {id, done, subject} = todo;
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div className={cn('checkbox', {done})} onClick={() => onToggle(id)}>
          {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{subject}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
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
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo,
);
