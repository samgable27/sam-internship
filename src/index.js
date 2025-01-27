import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { nftApi } from "./redux/features/apiSlice";

ReactDOM.render(
  <Provider store={store}>
    <ApiProvider api={nftApi}>
      <App />
    </ApiProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
