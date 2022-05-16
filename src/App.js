// 這是Count的容器Component
import Count from "./containers/Count";

import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Count store={store}></Count>
    </div>
  );
}

export default App;
