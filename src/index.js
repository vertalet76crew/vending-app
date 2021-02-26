import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import "./index.css";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(logger));
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
