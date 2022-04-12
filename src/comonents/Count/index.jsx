import React, { Component } from "react";
// 引入 store 用於獲取 redux 中保存的狀態
import store from "../../redux/store";

class Count extends Component {
  state = {
    // count: 0,
  };
  /**
   * 寫在這裡是當掛載後，會藉由store.subcribe去監聽redux裡的望態有沒有改變
   * 如果有改變，則利用setState的特性(使用setState就會觸發React的更新並渲染)去重新 render
   * 如果不想在每個組件都寫，可以寫在最外層的 index.js
   */
  // componentDidMount() {
  //   // 監測 redux 中狀態的變化，只要變化，就調用render
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch({ type: 'INCREMENT', data: Number(value) })
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch({ type: 'DECREMENT', data: Number(value) })
  };
  incrementIfOdd = () => {
    const count = store.getState();
    const { value } = this.selectNumber;
    if (Number(count) % 2 === 0) return;
    store.dispatch({ type: 'INCREMENT', data: Number(value) })
  };
  incrementAsync = () => {
    const count = store.getState();
    const { value } = this.selectNumber;
    setTimeout(() => {
      this.setState({
        count: count + Number(value),
      });
    }, 500);
  };
  render() {
    return (
      <div>
        <h1>當其求和為: {store.getState()}</h1>
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
