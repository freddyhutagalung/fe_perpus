import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
