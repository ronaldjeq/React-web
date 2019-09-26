import { put, call, select } from "redux-saga/effects";
import {
  GET_STORED_TOKEN,
  TOKEN_NOT_FOUND
} from "../../actions/session";

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
  let token = yield select(state => state.session.token);
  token = localStorage.getItem(SESSION_TOKEN);
  console.log(token);
  yield put({
    type: TOKEN_NOT_FOUND,
    token
  });
  //   if (token !== null) {
    
   // yield (API.defaults.headers.common.Authorization = `Bearer ${token}`);
//   }
}
