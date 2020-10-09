import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import sagas from "./sagas";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  //to connect the App store with REDUX_DEVTOOLS_EXTENSION
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
