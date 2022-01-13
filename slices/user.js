import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  me: null,
  registerData: null,
  authPin: null,
  userProviders: null,
  userTransactions: null,
  userMeters: null,
  initAuthentication: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.me = payload;
    },
    setRegisterData: (state, { payload }) => {
      state.registerData = payload;
    },
    setAuthPin: (state, { payload }) => {
      state.authPin = payload;
    },
    setUserProviders: (state, { payload }) => {
      state.userProviders = payload;
    },
    setUserTransactions: (state, { payload }) => {
      state.userTransactions = payload;
    },
    setUserMeter: (state, { payload }) => {
      state.userMeters = payload;
    },
    setInitAuthentication: (state, { payload }) => {
      state.initAuthentication = payload;
    },
  },
});

export const {
  setUser,
  setRegisterData,
  setAuthPin,
  setUserProviders,
  setUserTransactions,
  setUserMeter,
  setInitAuthentication,
} = userSlice.actions;

export const userSelector = state => state.user;

export default userSlice.reducer;
