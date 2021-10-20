import { useGlobalContext } from './useGlobalContext';

import {
  setIsLoggedIn,
  setUserPhoneNo,
  setUserAnonymousToken,
} from '../context/dispatchers/auth.dispatch';
import { setUserAccount } from '../context/dispatchers/user.dispatch';

export default function useDispatcher() {
  const { authDispatch, userDispatch } = useGlobalContext();

  return {
    setIsLoggedIn: value => setIsLoggedIn(value, authDispatch),
    setUserPhoneNo: value => setUserPhoneNo(value, authDispatch),
    setUserAnonymousToken: value => setUserAnonymousToken(value, authDispatch),
    setUserAccount: value => setUserAccount(value, userDispatch),
  };
}
