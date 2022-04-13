import { ADD_PERSON } from "../constants";

const initState = [
  {
    id: 1,
    name: "Tom",
    age: 18,
  },
];
export default function addPerson(perState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...perState];
    default:
      return perState;
  }
}
