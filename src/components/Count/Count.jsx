import React, { useState } from 'react';

const Count = () => {
  // const selectNumber = useRef(null)
  const [selectNumber, setSelectNumber] = useState(1)
  const [count, setCount] = useState(0)
  const handleSelectChange = (e) => {
    setSelectNumber(Number(e.target.value))
  }
  const handleIncrement = () => {
    setCount(count + selectNumber)
  }
  const handleDecrement = () => {
    if (count <= 0 || count < selectNumber) return
    setCount(count - selectNumber)
  }
  const handleIncrementIfOdd = () => {
    if (count % 2 === 0) return
    setCount(count + selectNumber)
  }
  const handleIncrementAsync = () => {
    setTimeout(() => {
      setCount(count + selectNumber)
    }, 500);
  }
  return (
    <div>
      <h1>當前求和為: {count}</h1>
      <select defaultValue={selectNumber} onChange={handleSelectChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>&nbsp;
      <button onClick={handleIncrement}>increment</button>&nbsp;
      <button onClick={handleDecrement}>decrement</button>&nbsp;
      <button onClick={handleIncrementIfOdd}>當前求和為奇數再加</button>&nbsp;
      <button onClick={handleIncrementAsync}>異步加</button>
    </div>
  );
}

export default Count;
