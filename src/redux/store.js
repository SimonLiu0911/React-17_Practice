// 引入 createStore，專門用於 redux 中最為核心的store
import { createStore, applyMiddleware } from "redux";

import allReducer from "./reducers";

// 引入 redux-thunk 用於支持異步 action
import thunk from "redux-thunk";

// 輸出store
export default createStore(allReducer, applyMiddleware(thunk));

// export default store;
