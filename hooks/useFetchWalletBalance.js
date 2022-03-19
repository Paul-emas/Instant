import { useRouter } from 'next/router';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWalletBalance } from '../api';

import { persistSelector, setToken } from '../slices/persist';
import { setInitAuthentication, setWalletBalance, userSelector } from '../slices/user';

export default function useFetchWalletBalance() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { walletBalance } = useSelector(userSelector);
  const { token } = useSelector(persistSelector);

  useEffect(() => {
    if (Number(walletBalance) <= 0) {
      fetchWalletBalance();
    }
  }, [walletBalance]);

  async function fetchWalletBalance() {
    const resp = await getUserWalletBalance(token);

    if (resp?.error?.status === 401) {
      toast.error('Your login token is invalid!');
      router.push('/error');
      dispatch(setInitAuthentication('signIn'));
      dispatch(setToken(null));
      return;
    }

    if (resp?.data?.errors) {
      toast.error('Error occured while fetching wallet balance');
      dispatch(setWalletBalance(0.0));
    }

    if (resp?.data) {
      const { balance } = resp?.data;
      dispatch(setWalletBalance(balance));
    }
  }

  return { walletBalance, init: () => fetchWalletBalance() };
}
