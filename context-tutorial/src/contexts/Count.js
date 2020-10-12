import React, { createContext, useState } from "react";

const CountContext = createContext({
  state: { count: 0 },
  actions: {
    setCount: () => {},
  },
});

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const value = {
    state: { count },
    actions: { setCount },
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

const { Consumer: CountConsumer } = CountContext;

export { CountProvider, CountConsumer };

export default CountContext;
