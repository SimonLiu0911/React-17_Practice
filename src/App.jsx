import Count from "./containers/Count"; // 引入的Count的容器組件
import Person from "./containers/Person"; // 引入的Person的容器組件

function App() {
  return (
    <div className="App">
      <Count></Count>
      <hr />
      <Person></Person>
    </div>
  );
}

export default App;
