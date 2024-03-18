import { applyMiddleware, compose, createStore } from "redux";
import loginRe from "./services/Reducers/Login_re";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(loginRe, composeEnhancers(
    applyMiddleware(thunk)
  ));

export default store;
