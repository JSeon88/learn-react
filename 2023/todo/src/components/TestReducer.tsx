import { useReducer } from "react";

type ActionType = "INCREASE" | "DECREASE";
type Action = {
  type: ActionType;
  data: number;
};

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
};

const TestReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
      </div>
    </div>
  );
};

export default TestReducer;
