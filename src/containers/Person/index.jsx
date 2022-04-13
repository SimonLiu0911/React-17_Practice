import React, { Component } from 'react';
// import nanoid from 'nanoid'

class Person extends Component {
  addPersion = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {
      name,
      age
    }
    console.log(personObj);
  }
  render() {
    return (
      <div>
        <h2>我是Person組件</h2>
        <input ref={c => this.nameNode = c} type='text' placeholder='輸入名字' />
        <input ref={c => this.ageNode = c} type='text' placeholder='輸入年齡' />
        <button onClick={this.addPersion}>添加</button>
        <ul>
          <li>名字1 -- 年齡1</li>
          <li>名字1 -- 年齡1</li>
          <li>名字1 -- 年齡1</li>
        </ul>
      </div>
    );
  }
}

export default Person;
