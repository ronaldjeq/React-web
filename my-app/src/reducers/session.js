import {
    GET_STORED_TOKEN,
    TOKEN_NOT_FOUND,
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
  } from "../actions/session";

  const initialState = {
    token: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      return {
        ...state,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
      case GET_STORED_TOKEN:
        return {
          ...state,
        };
      case TOKEN_NOT_FOUND:
        return {
            ...state,
            token: action.token,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  