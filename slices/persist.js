import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: null,
  userPhone: null,
  email: null,
  quickbuy: false,
  anonymousToken: null,
};

const persistSlice = createSlice({
  name: 'persist',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
    setUserPhone: (state, { payload }) => {
      state.userPhone = payload;
    },
    setUserEmail: (state, { payload }) => {
      state.email = payload;
    },
    setQuickBuy: (state, { payload }) => {
      state.quickbuy = payload;
    },
    setAnonymousToken: (state, { payload }) => {
      state.anonymousToken = payload;
    },
  },
});

export const {
  setToken,
  setIsLoggedIn,
  setUserPhone,
  setUserEmail,
  setQuickBuy,
  setAnonymousToken,
} = persistSlice.actions;

export const persistSelector = state => state.persist;

export default persistSlice.reducer;
