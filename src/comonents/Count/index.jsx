import React, { Component } from "react";
// 引入 store 用於獲取 redux 中保存的狀態
import store from "../../redux/store";

class Count extends Component {
  state = {
    // count: 0,
  };
  increment = () => {
    const { count } = this.state;
    const { value } = this.selectNumber;
    this.setState({
      count: count + Number(value),
    });
  };
  decrement = () => {
    const { count } = this.state;
    const { value } = this.selectNumber;
    this.setState({
      count: count - Number(value),
    });
  };
  incrementIfOdd = () => {
    const { count } = this.state;
    const { value } = this.selectNumber;
    if (Number(count) % 2 === 0) return;
    this.setState({
      count: count + Number(value),
    });
  };
  incrementAsync = () => {
    const { count } = this.state;
    const { value } = this.selectNumber;
    setTimeout(() => {
      this.setState({
        count: count + Number(value),
      });
    }, 500);
  };
  render() {
    console.log(store);
    return (
      <div>
        {/* <h1>當其求和為: {store.getState()}</h1> */}
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

export default Count;
