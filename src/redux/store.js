/**
 * 該文件專門用於輸出一個 store 對象，整個應用只有一個 store 對象
 */

// 引入 createStore 專門用於創建 redux 中最為核心的 state 對象
import { createStore } from "redux";
import countReducer from "./count_reducer";

// 輸出 store
export default createStore(countReducer);
