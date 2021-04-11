import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers";

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  // composeWithDevTools is used to run redux deTools extension in Chrome
  // we use thunk to be able to pass many variable to our action
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
