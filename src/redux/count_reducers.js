const initCount = 0

export const countReducer = (preState = initCount, action) => {
  const { type, data } = action
  switch (type) {
    case 'INCREMENT':
      return preState + data
    case 'DECREMENT':
      return preState - data
    default:
      return preState
  }
}