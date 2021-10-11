import userTypes from '../types/user.type';

export const setUserData = payload => ({
  type: userTypes.SET_USER,
  payload,
});
