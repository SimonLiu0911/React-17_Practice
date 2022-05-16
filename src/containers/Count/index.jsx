import React, { useState } from "react";
import store from "../../redux/store";

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

import { connect } from "react-redux";

const Count = (props) => {
  const [selectNumber, setSelectNumber] = useState(1);
  const count = store.getState();

  const handleSelectChange = (e) => {
    setSelectNumber(Number(e.target.value));
  };
  const handleIncrement = () => {
    // store.dispatch(createIncrementAction(selectNumber));
    props.incrementFn(selectNumber);
  };
  const handleDecrement = () => {
    if (count <= 0 || count < selectNumber) return;
    // store.dispatch(createDecrementAction(selectNumber));
    props.decrementFn(selectNumber);
  };
  const handleIncrementIfOdd = () => {
    // const count = store.getState();
    if (count % 2 === 0) return;
    // store.dispatch(createIncrementAction(selectNumber));
    props.incrementFn(selectNumber);
  };
  const handleIncrementAsync = () => {
    // setTimeout(() => {
    // store.dispatch(createIncrementAsyncAction(selectNumber, 500));
    // }, 500);
    props.incrementAsyncFn(selectNumber, 700);
  };

  return (
    <div>
      <h1>當前求和為: {props.count}</h1>
      <select defaultValue={selectNumber} onChange={handleSelectChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;
      <button onClick={handleIncrement}>increment</button>&nbsp;
      <button onClick={handleDecrement}>decrement</button>&nbsp;
      <button onClick={handleIncrementIfOdd}>當前求和為奇數再加</button>&nbsp;
      <button onClick={handleIncrementAsync}>異步加</button>
    </div>
  );
};

// const mapStateToProps = (count) => ({ count });

// const mapDispatchToProps = (dispatch) => ({
//   incrementFn: (number) => dispatch(createIncrementAction(number)),
//   decrementFn: (number) => dispatch(createDecrementAction(number)),
//   incrementAsyncFn: (number, time) =>
//     dispatch(createIncrementAsyncAction(number, time)),
// });

// 使用connect()()創建並輸出一個Count的容器組件
// const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count);
// optimize
const CountContainer = connect((count) => ({ count }), {
  incrementFn: createIncrementAction,
  decrementFn: createDecrementAction,
  incrementAsyncFn: createIncrementAsyncAction,
})(Count);

export default CountContainer;
