import { combineReducers } from "redux";

import countReducer from "./count";
import personReducer from "./person";

const allReducer = combineReducers({
  countReducer,
  personReducer,
});

export default allReducer;
