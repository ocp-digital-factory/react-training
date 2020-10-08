import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  //to connect the App store with REDUX_DEVTOOLS_EXTENSION
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
