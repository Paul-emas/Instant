import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  me: null,
  registerData: null,
  authPin: null,
  userProviders: null,
  userTransactions: null,
  userWalletTransactions: null,
  userMeters: null,
  initAuthentication: '',
  walletBalance: '0.00',
  openNav: false,
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
    setWalletBalance: (state, { payload }) => {
      state.walletBalance = payload;
    },
    setUserWalletTransactions: (state, { payload }) => {
      state.userWalletTransactions = payload;
    },
    setOpenNav: (state, { payload }) => {
      state.openNav = payload;
    },
    userSignOut: () => {
      console.log('User has been logged out....');
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
  setWalletBalance,
  setUserWalletTransactions,
  setOpenNav,
  userSignOut,
} = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;
