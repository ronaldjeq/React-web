export const GET_STORED_TOKEN = "GET_STORED_TOKEN";
export const TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND";

export const getStoredToken = () => ({
    type: GET_STORED_TOKEN,
    token: localStorage.getItem("userToken")
  });

export const tokenNotFound = token => ({
    type: TOKEN_NOT_FOUND,
    token
  });