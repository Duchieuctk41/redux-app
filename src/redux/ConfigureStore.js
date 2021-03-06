import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhances = window.__REDUX_DEVTOOLS_EXTENTIONS_COMPOSE__ || compose; // add support for Redux dev tools 
  return createStore(
    rootReducer,
    initialState,
    composeEnhances(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
