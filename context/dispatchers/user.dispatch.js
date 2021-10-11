import { setUserData } from '../actions/user.action';

export const setUserAccount = (value, dispatch) => dispatch(setUserData(value));
