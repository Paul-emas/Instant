import authTypes from '../types/auth.type';

const authInitialState = {
  isLoggedIn: false,
  authPhone: null,
  anonymousToken: null,
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case authTypes.SET_LOGGEDIN:
    case authTypes.SET_PHONE_NO:
    case authTypes.SET_AYS_TOKEN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export { authInitialState, authReducer };
