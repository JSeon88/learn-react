/**
 * useContext : Context로부터 값을 참조하기 위한 훅
 *
 * useContext를 사용하면 context를 사용하기 위해 필요했던 `Consumer`를 사용하지 않아도 값을 참조할 수 있음
 */
import React, { useContext } from "react";

type User = {
  id: number;
  name: string;
};

const UserContext = React.createContext<User | null>(null);

const GrandChild = () => {
  const user = useContext(UserContext);
  return user !== null ? <p>Hello, {user?.name}</p> : null;
};

const Child = () => {
  const now = new Date();

  return (
    <div>
      <p>Current: {now.toLocaleDateString()}</p>
      <GrandChild />
    </div>
  );
};

const Parent = () => {
  const user: User = {
    id: 1,
    name: "Sunny",
  };

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
};

export default Parent;
