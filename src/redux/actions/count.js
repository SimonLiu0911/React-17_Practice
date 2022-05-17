/**
 * 該文件專門為count組件生成action對象
 */

import { INCREMENT, DECREMENT } from "../constant";
// import store from "./store";

export const createIncrementAction = (data) => ({ type: INCREMENT, data });

export const createDecrementAction = (data) => ({ type: DECREMENT, data });

// 異步action，就是指action的值為函數，異步action中一般都會調用同步action，異步action不是必須要用的
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};
