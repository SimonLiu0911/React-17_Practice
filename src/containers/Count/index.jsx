import React, { useState } from "react";
import store from "../../redux/store";

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";

import { connect } from "react-redux";

const Count = (props) => {
  const [selectNumber, setSelectNumber] = useState(1);
  const count = store.getState();

  const handleSelectChange = (e) => {
    setSelectNumber(Number(e.target.value));
  };
  const handleIncrement = () => {
    props.incrementFn(selectNumber);
  };
  const handleDecrement = () => {
    if (count <= 0 || count < selectNumber) return;
    props.decrementFn(selectNumber);
  };
  const handleIncrementIfOdd = () => {
    if (count % 2 === 0) return;
    props.incrementFn(selectNumber);
  };
  const handleIncrementAsync = () => {
    props.incrementAsyncFn(selectNumber, 700);
  };

  return (
    <>
      <div>
        <h1>當前求和為: {props.countData}</h1>
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
      <div>
        <p>person組件的列表:</p>
        <ul>
          {props.personData.map((person, index) => {
            return (
              <li key={index}>
                {person.personName} - {person.personAge}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const CountContainer = connect(
  (state) => ({
    personData: state.personReducer,
    countData: state.countReducer,
  }),
  {
    incrementFn: createIncrementAction,
    decrementFn: createDecrementAction,
    incrementAsyncFn: createIncrementAsyncAction,
  }
)(Count);

export default CountContainer;
