// 引入Count的UI組件
import CountUI from "../../components/Count/Count";

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

// 引入connect用於連結UI組件與redux
import { connect } from "react-redux";

/**
 * 1. mapStateToProps返回的是一個對象
 * 2. 返回的對象中的key就作為傳遞給UI組件props的key，value就作為傳遞給UI組件props的value
 * 3. mapStateToProps用於傳遞狀態
 */
// function mapStateToProps(count) {
//   return { count };
// }
// optimize
const mapStateToProps = (count) => ({ count });

/**
 * 1. mapDispatchToProps函數返回的是一個對象
 * 2. 返回的對象中的key就作為傳遞給UI組件props的key，value就作為傳遞給UI組件props的value
 * 3. mapDispatchToProps用於傳遞操作狀態的方法
 */
// function mapDispatchToProps(dispatch) {
//   return {
//     incrementFn: (number) => dispatch(createIncrementAction(number)),
//     decrementFn: (number) => dispatch(createDecrementAction(number)),
//     incrementAsyncFn: (number, time) =>
//       dispatch(createIncrementAsyncAction(number, time)),
//   };
// }
// optimize
const mapDispatchToProps = (dispatch) => ({
  incrementFn: (number) => dispatch(createIncrementAction(number)),
  decrementFn: (number) => dispatch(createDecrementAction(number)),
  incrementAsyncFn: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
});

// 使用connect()()創建並輸出一個Count的容器組件
// const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);
// optimize
const CountContainer = connect((count) => ({ count }), {
  incrementFn: createIncrementAction,
  decrementFn: createDecrementAction,
  incrementAsyncFn: createIncrementAsyncAction,
})(CountUI);

export default CountContainer;
