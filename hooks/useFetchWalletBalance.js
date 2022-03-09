import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWalletBalance } from '../api';

import { persistSelector } from '../slices/persist';
import { setWalletBalance, userSelector } from '../slices/user';

export default function useFetchWalletBalance() {
  const dispatch = useDispatch();
  const { walletBalance } = useSelector(userSelector);
  const { token } = useSelector(persistSelector);

  useEffect(() => {
    if (Number(walletBalance) <= 0) {
      fetchWalletBalance();
    }
  }, [walletBalance]);

  async function fetchWalletBalance() {
    const resp = await getUserWalletBalance(token);

    if (resp?.data?.errors) {
      dispatch(setWalletBalance(0.0));
    }

    if (resp?.data) {
      const { balance } = resp?.data;
      dispatch(setWalletBalance(balance));
    }
  }

  return { walletBalance, init: () => fetchWalletBalance() };
}
