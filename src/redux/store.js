/**
 * 該文件專門用於輸出一個 store 對象，整個應用只有一個 store 對象
 */

// 引入 createStore 專門用於創建 redux 中最為核心的 state 對象
import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
import thunk from "redux-thunk";
// 引入 redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

// 彙總所有的reducer變為一個總的reducer
const allReducer = combineReducers({
  count: countReducer,
  persons: personReducer,
});

// 輸出 store
export default createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
