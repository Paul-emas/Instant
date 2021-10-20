import authType from '../types/auth.type';

export const setLoggedIn = payload => ({
  type: authType.SET_LOGGEDIN,
  payload,
});

export const setPhoneNo = payload => ({
  type: authType.SET_PHONE_NO,
  payload,
});

export const setAnonymousToken = payload => ({
  type: authType.SET_AYS_TOKEN,
  payload,
});
