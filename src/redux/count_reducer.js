/**
 * 1. 該文件是用於創建一個為 Count 組件服務的 reducer，reducer 的本質就是一個函數
 * 2. reducer 函數會接到兩個參數，分別為：之前的狀態(preState) & 動作對象(action)
 */

const initState = 0;
function countReducer(preState = initState, action) {
  // 從 action 對象中獲取 type, data
  const { type, data } = action;
  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    default:
      return preState;
  }
}
