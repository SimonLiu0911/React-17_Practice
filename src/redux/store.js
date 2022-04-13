/**
 * 該文件專門用於輸出一個 store 對象，整個應用只有一個 store 對象
 */

// 引入 createStore 專門用於創建 redux 中最為核心的 state 對象
import { createStore, applyMiddleware } from "redux";
import countReducer from "./reducers/count";
import thunk from 'redux-thunk';

// 輸出 store
export default createStore(countReducer,applyMiddleware(thunk));
