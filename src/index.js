import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose} from "redux";
import * as serviceWorker from "./serviceWorker";
import gameReducer from "./reducers/gameReducer";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk'


const store = createStore(
  gameReducer,
  compose(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
