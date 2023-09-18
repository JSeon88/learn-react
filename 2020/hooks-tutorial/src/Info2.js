import React, {useReducer} from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}
const Info2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickName: ''
  });
  const {name, nickName} = state;

  const onChange = (e) => {
    const {name, value} = e.target;
    dispatch({name, value});
  };

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

export default Info2;
