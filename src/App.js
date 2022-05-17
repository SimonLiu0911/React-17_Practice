// 這是Count的容器Component
import Count from "./containers/Count";
import Person from "./containers/Person";

// import store from "./redux/store";

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
