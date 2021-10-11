import { useReducer } from 'react';
import {
  authReducer,
  authInitialState,
} from '../context/reducers/auth.reducer';
import {
  userReducer,
  userInitialState,
} from '../context/reducers/user.reducer';

export default function useCombinedReducer() {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);

  return {
    auth: authState,
    user: userState,
    authDispatch,
    userDispatch,
  };
}
