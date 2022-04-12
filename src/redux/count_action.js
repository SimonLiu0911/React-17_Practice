/**
 * 該文件專門為 Count 組建生成 action 對象
 */

export const createIncrementAction = data => ({ type: 'INCREMENT', data })
export const createDecrementAction = data => ({ type: 'DECREMENT', data })