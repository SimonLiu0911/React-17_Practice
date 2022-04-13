import React, { Component } from "react";

// import CountUI from "../../components/Count";
// 引入connect用於連結UI組件與redux
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

/**
 * 1. mapStateToProps函數的返回的是一個對象
 * 2. 返回的對象中的key就作為傳遞給UI組件props的key, value就作為傳遞給UI組件props的value
 * 3. mapStateToProps用於傳遞狀態
 */
function mapStateToProps(state) {
  return { count: state };
}

/**
 * 1. mapDispatchToProps函數的返回的是一個對象
 * 2. 返回的對象中的key就作為傳遞給UI組件props的key, value就作為傳遞給UI組件props的value
 * 3. mapDispatchToProps用於傳遞狀態的方法
 */
function mapDispatchToProps(dispatch) {
  return {
    jia: (number) => {
      dispatch(createIncrementAction(number));
    },
    jian: (number) => {
      dispatch(createDecrementAction(number));
    },
    jiaAsync: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time));
    },
  };
}

// 定義UI組件
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
    // store.dispatch(createIncrementAction(Number(value)));
    this.props.jia(Number(value))
  };
  decrement = () => {
    const { value } = this.selectNumber;
    // store.dispatch(createDecrementAction(Number(value)));
    this.props.jian(Number(value))
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 === 0) return;
    // store.dispatch(createIncrementAction(Number(value)));
    this.props.jia(Number(value))
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    // setTimeout(() => {
    // store.dispatch(createIncrementAsyncAction(Number(value), 500));
    this.props.jiaAsync(Number(value), 500)
    // }, 500);
  };
  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>當其求和為: {count}</h1>
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

// 使用connect()()創建並輸出一個Count的容器組件
const container = connect(mapStateToProps, mapDispatchToProps)(Count);

export default container;
