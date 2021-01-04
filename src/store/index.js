import { combineReducers, createStore } from "redux";
import testReducer from "./test/reducer";
import smileyReducer from './smiley/reducer';

// download chrome extension
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

  // dont forget to add the reducer here
const store = createStore(
  combineReducers({
    test: testReducer,
    smiley: smileyReducer
  }),
  enhancer
);

export default store;