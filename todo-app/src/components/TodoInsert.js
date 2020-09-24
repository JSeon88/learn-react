import React, {useState, useCallback, useRef} from 'react';
import {MdAdd} from 'react-icons/md';
import PropTypes from 'prop-types';

import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
  const inputRef = useRef('');

  const onSubmit = useCallback(
    (e) => {
      onInsert(inputRef.current.value);
      inputRef.current.value = '';

      e.preventDefault();
    },
    [onInsert],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" ref={inputRef} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

TodoInsert.propTypes = {
  onInsert: PropTypes.func,
};

export default TodoInsert;
