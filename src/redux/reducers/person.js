// reducer專門負責初始化狀態跟加工狀態

import { ADD_PERSON } from "../constant";

const initPersonList = [
  {
    personName: "Tom",
    personAge: 18,
  },
];

export default function personReducer(perState = initPersonList, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
		console.log(1);
      return [data, ...perState];
    default:
      return perState;
  }
}
