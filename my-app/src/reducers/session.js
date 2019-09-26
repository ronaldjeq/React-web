import {
    GET_STORED_TOKEN,
    TOKEN_NOT_FOUND
  } from "../actions/session";

  const initialState = {
    token: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
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
  