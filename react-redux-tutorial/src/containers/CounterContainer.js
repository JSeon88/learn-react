import React from 'react';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

// 기본 형태
// const mapStateToProps = (state) => ({
//   number: state.counter.number
// });
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   }
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// bindActionCreators를 이용
// export default connect(
//   (state) => ({
//     number: state.counter.number
//   }),
//   (dispatch) =>
//     bindActionCreators(
//       {
//         increase,
//         decrease
//       },
//       dispatch
//     )
// )(CounterContainer);

// mapDispatchToProps에 대한하는 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루어진 객체 형태로 넣어줌.
// connect 함수가 내부적으로 bindActionCreators 작업을 대신해 줌.
export default connect(
  (state) => ({
    number: state.counter.number
  }),
  {
    increase,
    decrease
  }
)(CounterContainer);
