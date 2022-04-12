import CountUI from "../../components/Count";
// 引入connect用於連結UI組件與redux
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

/**
 * 1. mapStateToProps函數的返回的是一個對象
 * 2. 返回的對象中的key就作為傳遞給UI組件props的key, value就作為傳遞給UI組件props的value
 * 3. mapStateToProps用於傳遞狀態
 */
function mapStateToProps(state) {
  return { count: state };
}

/**
 * 1. mapDispatchToProps函數的返回的是一個對象
 * 2. 返回的對象中的key就作為傳遞給UI組件props的key, value就作為傳遞給UI組件props的value
 * 3. mapDispatchToProps用於傳遞狀態的方法
 */
function mapDispatchToProps(dispatch) {
  return {
    jia: (number) => {
      dispatch(createIncrementAction(number));
    },
    jian: (number) => {
      dispatch(createDecrementAction(number));
    },
    jiaAsync: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time));
    },
  };
}

// 使用connect()()創建並輸出一個Count的容器組件
const container = connect(mapStateToProps, mapDispatchToProps)(CountUI);

export default container;
