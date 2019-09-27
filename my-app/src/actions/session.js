export const GET_STORED_TOKEN = "GET_STORED_TOKEN";
export const TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";

export const getStoredToken = () => ({
    type: GET_STORED_TOKEN,
    token: localStorage.getItem("userToken")
  });

export const tokenNotFound = token => ({
    type: TOKEN_NOT_FOUND,
    token
  });

  export const loginRequest = (username, password) => ({
    type: LOGIN_REQUEST,
    username,
    password
  });

  export const loginRequestSuccess = token => ({
    type: LOGIN_REQUEST_SUCCESS,
    token
  });