import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import store from "./redux/store";
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// 監聽redux並重新渲染(如果有用react-redux，則不需要，因為已在connect()()已經有默認監測redux改變的能力 )
// store.subscribe(() => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// });
