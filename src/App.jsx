// import Count from "./components/Count";
import Count from "./containers/Count";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      {/* 給容器組件傳遞store */}
      <Count store={store}></Count>
    </div>
  );
}

export default App;
