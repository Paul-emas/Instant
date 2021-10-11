import userTypes from '../types/user.type';

const userInitialState = {
  me: null,
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case userTypes.SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export { userInitialState, userReducer };
