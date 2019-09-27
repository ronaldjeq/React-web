import { takeEvery, call, spawn, all } from "redux-saga/effects";

import {  GET_STORED_TOKEN, LOGIN_REQUEST } from "../../actions/session";

import {
  handleGetStoredTokenAction,
  handleLoginRequestAction
} from "./session";


function* sessionSaga() {
  yield takeEvery(GET_STORED_TOKEN, handleGetStoredTokenAction);
  yield takeEvery(LOGIN_REQUEST,handleLoginRequestAction );
}


const makeRestartable = saga =>
  function*() {
    yield spawn(function*() {
      while (true) {
        try {
          yield call(saga);
          console.error(
            `unexpected on - ${saga.name} - root saga termination.
                    The root sagas are supposed to be sagas that live during the whole app lifetime!`,
            saga
          );
        } catch (e) {
          console.error("Saga error, the saga will be restarted", e);
        }
        // Avoid infinite failures blocking app TODO use backoff retry policy...
        // yield delay(1000);
      }
    });
  };

const rootSagas = [sessionSaga].map(
  makeRestartable
);

export default function* root() {
  yield all(rootSagas.map(saga => call(saga)));
}
