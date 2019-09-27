import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import  logger  from 'redux-logger';
import reducers from "../reducers";
import rootSaga from '../services/sagas';
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["session"]
};
const persistReducer = persistCombineReducers(persistConfig, reducers);

const rootReducer = (state, action) => {
  if (state && "_persist" in state && state._persist === undefined) {
    const { _persist, ...stateWithoutPersist } = state;
    return persistReducer(stateWithoutPersist, action);
  }

  return persistReducer(state, action);
};

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return {
    store,
    persistor
  };
};
export default configureStore;
