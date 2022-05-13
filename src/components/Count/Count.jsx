import React, { useState, useEffect } from "react";
// 引入store來獲取redux中的狀態
import store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

const Count = () => {
  const [selectNumber, setSelectNumber] = useState(1);
  const count = store.getState();

  const handleSelectChange = (e) => {
    setSelectNumber(Number(e.target.value));
  };
  const handleIncrement = () => {
    store.dispatch(createIncrementAction(selectNumber));
  };
  const handleDecrement = () => {
    if (count <= 0 || count < selectNumber) return;
    store.dispatch(createDecrementAction(selectNumber));
  };
  const handleIncrementIfOdd = () => {
    // const count = store.getState();
    if (count % 2 === 0) return;
    store.dispatch(createIncrementAction(selectNumber));
  };
  const handleIncrementAsync = () => {
    // setTimeout(() => {
      store.dispatch(createIncrementAsyncAction(selectNumber, 500));
    // }, 500);
  };

  return (
    <div>
      <h1>當前求和為: {store.getState()}</h1>
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

export default Count;
