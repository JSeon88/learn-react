import React, { useContext } from "react";

import CountContext from "../contexts/Count";

const CountBox = () => {
  const { state, actions } = useContext(CountContext);

  return (
    // <CountConsumer>
    //   {({ actions }) => (
    <div>
      <div>{state.count}</div>
      <button onClick={() => actions.setCount(state.count + 1)}>+</button>
      <button onClick={() => actions.setCount(state.count - 1)}>-</button>
    </div>
    //   )}
    // </CountConsumer>
  );
};

export default CountBox;
