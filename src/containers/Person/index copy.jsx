import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import store from "../../redux/store";

const Person = (props) => {
  const [personName, setPersonName] = useState("");
  const [personAge, setPersonAge] = useState(null);
  const personList = [
    {
      name: "",
      age: null,
    },
  ];
  const addNewPerson = () => {
	const newPersonObj = {
		name: personName,
		age: personAge
	}
	personList.push(newPersonObj)
  };
  const getPersonName = (e) => {
    setPersonName(e.target.value);
  };
  const getPersonAge = (e) => {
    setPersonAge(Number(e.target.value));
  };
  return (
    <>
      <div>
        <input
          type="text"
          defaultValue={personName}
          onChange={(e) => getPersonName(e)}
          placeholder="person name"
        />
        &nbsp;
        <input
          type="number"
          defaultValue={personAge}
          onChange={(e) => getPersonAge(e)}
          placeholder="person age"
        />
        &nbsp;
        <button onClick={addNewPerson}>Confirm</button>
      </div>
      <ul>
        {personList.map((person, index) => {
          return (
            <li key={index}>
              {person.name} - {person.age}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const PersonContainer = connect((count) => ({ count }))(Person);

export default PersonContainer;
