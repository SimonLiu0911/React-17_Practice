import React, { createRef } from "react";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";

const Person = (props) => {
  const { personData, addPersonFn, countData } = props;
  const personNameInput = createRef();
  const personAgeInput = createRef();
  const addNewPerson = () => {
    const personName = personNameInput.current.value;
    const personAge = Number(personAgeInput.current.value);
    const personObj = {
      personName,
      personAge,
    };
    addPersonFn(personObj);
    personNameInput.current.value = "";
    personAgeInput.current.value = null;
  };
  return (
    <>
      <div>
        <input type="text" ref={personNameInput} placeholder="person name" />
        &nbsp;
        <input type="number" ref={personAgeInput} placeholder="person age" />
        &nbsp;
        <button onClick={addNewPerson}>Confirm</button>
      </div>
      <ul>
        {personData.map((person, index) => {
          return (
            <li key={index}>
              {person.personName} - {person.personAge}
            </li>
          );
        })}
      </ul>
      <p>Count組件的和: {countData}</p>
    </>
  );
};

const PersonContainer = connect(
  (state) => ({
    personData: state.personReducer,
    countData: state.countReducer,
  }),
  {
    addPersonFn: createAddPersonAction,
  }
)(Person);

export default PersonContainer;
