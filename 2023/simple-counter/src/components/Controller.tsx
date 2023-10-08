type Props = {
  handlerCount: (value: number) => void;
};

const Controller: React.FC<Props> = ({ handlerCount }) => {
  return (
    <div>
      <button onClick={() => handlerCount(-1)}>-1</button>
      <button onClick={() => handlerCount(-10)}>-10</button>
      <button onClick={() => handlerCount(-100)}>-100</button>
      <button onClick={() => handlerCount(100)}>+100</button>
      <button onClick={() => handlerCount(10)}>+10</button>
      <button onClick={() => handlerCount(1)}>+1</button>
    </div>
  );
};

export default Controller;
