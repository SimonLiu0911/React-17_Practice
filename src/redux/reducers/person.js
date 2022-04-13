import { ADD_PERSON } from "../constants";

const initState = [
  {
    id: 1,
    name: "Tom",
    age: 18,
  },
];
export default function addPerson(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      // preState.unshift(data) // 此處不可以這樣寫，這樣寫會導致preState被改寫，personReducer就不是存函數了
      return [data, ...preState];
    default:
      return preState;
  }
}
