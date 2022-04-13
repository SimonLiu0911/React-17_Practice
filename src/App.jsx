import Count from "./containers/Count";
import Person from "./containers/Person"

function App() {
  return (
    <div className="App">
      {/* 給容器組件傳遞store，如果用react-redux的話，直接使用Provider在最外層引入，就不需要在這裡一個個引入組件 */}
      {/* <Count store={store}></Count> */}
      <Count></Count>
      <hr />
      <Person></Person>
    </div>
  );
}

export default App;
