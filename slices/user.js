import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  me: null,
  userProviders: null,
  userTransactions: null,
  userMeters: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.me = payload;
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
  },
});

export const { setUser, setUserProviders, setUserTransactions, setUserMeter } =
  userSlice.actions;

export const userSelector = state => state.user;

export default userSlice.reducer;
