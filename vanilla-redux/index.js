import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 이름 정의
// 문자열 형태, 주로 대문자. 액션 이름은 유니크
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({
  type: INCREASE,
  difference,
  pyaload,
  gjgglgkj,
});
const decrease = () => ({ type: DECREASE });

// 초기값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state, //불변성 유지
        counter: state.counter + action.difference,
        counter: state.counter + action.pyaload,
      };
    case DECREASE:
      return {
        ...state, //불변성 유지
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(reducer);

// reder 함수
// 상태가 업데이트 될 때마다 호출
const render = () => {
  const state = store.getState(); // 현재 상태 불러오기
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  // 카운터 처리
  counter.innerText = state.counter;
};

render();

// 구독하기 : render 함수가 스토어의 상태가 바뀔 때마다 호출되도록.
// subscribe : 스토어 내장 함수
store.subscribe(render);

// unsubscribe
const unsubscribe = store.subscribe(render);
// unsubscribe();

// 액션 발생 : dispatch
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
