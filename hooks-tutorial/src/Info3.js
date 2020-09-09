import React from 'react';
import useInputs from './useInputs';

const Info3 = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickName: ''
  });
  const {name, nickName} = state;

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input type="text" name="nickName" value={nickName} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info3;
