import React, {useState, useEffect} from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  // 리액트 컴포넌트가 랜더링될 때마다 특정 작업을 수행하도록 설정
  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다');
  //     console.log({
  //       name,
  //       nickName
  //     });
  //   });

  // 마운트 될 때만 실행
  //   useEffect(() => {
  //     console.log('마운트 될때만 실행됩니다.');
  //   }, []);

  // 특정 값이 업데이트될 때만 실행하고 싶을 때
  useEffect(() => {
    console.log(name);
  }, [name]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickName} />
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

export default Info;
