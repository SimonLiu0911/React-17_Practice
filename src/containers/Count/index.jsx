import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/action/count";

// UI組件
class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(Number(value));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(Number(value));
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 === 0) return;
    this.props.jia(Number(value));
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaAsync(Number(value), 500);
  };
  render() {
    const { count, person } = this.props;
    return (
      <div>
        <h2>我是Count組件</h2>
        <h1>當其求和為: {count}</h1>
        <h2>下方人數為: {person.length}</h2>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>當前求和為奇數</button>
        <button onClick={this.incrementAsync}>異步加</button>
      </div>
    );
  }
}

// 容器組件
const container = connect(
  (state) => ({ count: state.he, person: state.rens }),
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(Count);

export default container;
