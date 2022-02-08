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

const rootReducer = (state, action) => {
  if (action.type === 'user/userSignOut') {
    storage.removeItem('persist:root');
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

const persistedStoreReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedStoreReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
