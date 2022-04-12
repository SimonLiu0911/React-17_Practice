import React, { Component } from 'react';
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'

class Index extends Component {
  constructor(props) {
    super(props)
    this.selectNumber = React.createRef()
    this.state = {
      // count: 0
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
  increment = () => {
    const { value } = this.selectNumber.current
    store.dispatch(createIncrementAction(Number(value)))
  }
  decrement = () => {
    const { value } = this.selectNumber.current
    store.dispatch(createDecrementAction(Number(value)))
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber.current
    const { count } = store.getState()
    if (count % 2 === 0) return;
    this.setState({
      count: count + Number(value)
    })
  }
  incrementAsync = () => {
    const { value } = this.selectNumber.current
    const { count } = store.getState()
    setTimeout(() => {
      this.setState({
        count: count + Number(value)
      })
    }, 500);
  }
  render() {
    return (
      <div>
        <h1>求和：{store.getState()}</h1>
        <select ref={this.selectNumber}>
          {/* <select ref={c => (this.selectNumber = c)}> */}
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

export default Index;
