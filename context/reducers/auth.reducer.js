import authTypes from '../types/auth.type';

const authInitialState = {
  isLoggedIn: false,
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case authTypes.SET_LOGGEDIN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export { authInitialState, authReducer };
