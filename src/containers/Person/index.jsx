import React, { Component } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { createAddPersonAction } from "../../redux/action/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {
      id: nanoid(),
      name,
      age,
    };
    this.props.addPerson(personObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    return (
      <div>
        <h1>上方的數字：{this.props.count}</h1>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="input name"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="input age"
        />
        <button onClick={this.addPerson}>add</button>
        <ul>
          {this.props.yi.map((p) => {
            return (
              <li key={p.id}>
                {p.name} -- {p.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ yi: state.rens, count: state.he }), {
  addPerson: createAddPersonAction,
})(Person);
