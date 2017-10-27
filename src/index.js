import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./common/store";
import serviceWorker from "./common/serviceworker";
import ReactApplication from "./reactapplication";

ReactDOM.render(
  <Provider
    store={store}>
    <ReactApplication
      id="application" />
  </Provider>, document.getElementById("root"));

serviceWorker();
