// 引入 createStore，專門用於 redux 中最為核心的store
import { createStore, applyMiddleware, combineReducers } from "redux";

// 引入為Count組件服務的reducer
import countReducer from "./reducers/count";
import personReducer from "./reducers/person"

// 引入 redux-thunk 用於支持異步 action
import thunk from "redux-thunk";

const allReducer = combineReducers({
	countReducer,
	personReducer
})

// 輸出store
export default createStore(allReducer, applyMiddleware(thunk));

// export default store;
