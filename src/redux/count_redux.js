/**
 * 1. 該文件是用於創建一個為Count組件服務的Reducer，reducer的本質就是一個函數
 * 2. reducer函數會接到兩個參數，分別為：之前的狀態(preState) ＆ 動作對象(action)
 */

// 在reducer只管基本的操作，其他判斷不要在這做，例如奇數再加，就要在前面先判對好是不是奇數
import { INCREMENT, DECREMENT } from "./constant";

const initCount = 0;
export default function countReducer(preState = initCount, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}

// export default countReducer;
