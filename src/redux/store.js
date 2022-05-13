// 引入 createStore，專門用於 redux 中最為核心的store
import { createStore, applyMiddleware } from "redux";

// 引入為Count組件服務的reducer
import countReducer from "./count_redux";

// 引入 redux-thunk 用於支持異步 action
import thunk from "redux-thunk";

// 輸出store
export default createStore(countReducer, applyMiddleware(thunk));

// export default store;
