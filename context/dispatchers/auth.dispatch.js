import { setLoggedIn } from '../actions/auth.action';

export const setIsLoggedIn = (value, dispatch) => dispatch(setLoggedIn(value));
