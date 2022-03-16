import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: null,
  userPhone: null,
  email: null,
  quickbuy: false,
  anonymousToken: null,
  firstTimeUser: true,
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
    setFirstTimeUser: (state, { payload }) => {
      state.firstTimeUser = payload;
    },
  },
});

export const { setToken, setIsLoggedIn, setUserPhone, setUserEmail, setQuickBuy, setAnonymousToken, setFirstTimeUser } =
  persistSlice.actions;

export const persistSelector = (state) => state.persist;

export default persistSlice.reducer;
