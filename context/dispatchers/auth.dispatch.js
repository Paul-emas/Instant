import {
  setPhoneNo,
  setLoggedIn,
  setAnonymousToken,
} from '../actions/auth.action';

export const setIsLoggedIn = (value, dispatch) => dispatch(setLoggedIn(value));

export const setUserPhoneNo = (value, dispatch) => dispatch(setPhoneNo(value));

export const setUserAnonymousToken = (value, dispatch) =>
  dispatch(setAnonymousToken(value));
