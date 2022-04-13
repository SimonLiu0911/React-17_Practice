// import Count from "./components/Count";
import Count from "./containers/Count";
// import store from "./redux/store";

function App() {
  return (
    <div className="App">
      {/* 給容器組件傳遞store，如果用react-redux的話，直接使用Provider在最外層引入，就不需要在這裡一個個引入組件 */}
      {/* <Count store={store}></Count> */}
      <Count></Count>
    </div>
  );
}

export default App;
