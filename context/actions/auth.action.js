import authType from '../types/auth.type';

export const setLoggedIn = payload => ({
  type: authType.SET_LOGGEDIN,
  payload,
});
