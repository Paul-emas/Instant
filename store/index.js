import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistedReducer from '../slices/persist';
import userReducer from '../slices/user';

const persistConfig = {
  key: '__next',
  storage,
  whitelist: ['persist'],
};

const reducers = combineReducers({
  user: userReducer,
  persist: persistedReducer,
});

const rootReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
