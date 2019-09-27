import { put} from "redux-saga/effects";
import {
  TOKEN_NOT_FOUND,
  LOGIN_REQUEST_SUCCESS
} from "../../actions/session";
import history from "../history";

// import API from "../api";

// const requestTokenFromAPI = (username, password) =>
//   API({
//     url: "/account/token",
//     method: "POST",
//     data: {
//       username,
//       password
//     }
//   });

const SESSION_TOKEN = "userToken";

const saveToken = token => localStorage.setItem(SESSION_TOKEN, token);

export function* handleGetStoredTokenAction(/*action*/) {
  let token = localStorage.getItem(SESSION_TOKEN);
  yield put({
    type: TOKEN_NOT_FOUND,
    token
  });
}

export function* handleLoginRequestAction(action) {
    // Check username
        yield put({ type: LOGIN_REQUEST_SUCCESS, token: `${action.username}_${action.password}` });
        history.push(`${process.env.PUBLIC_URL}/home`);
        yield saveToken(`${action.username}_${action.password}`);

  
}
