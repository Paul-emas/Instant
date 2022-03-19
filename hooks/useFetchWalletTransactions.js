import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWalletTransactions } from '../api';
import { persistSelector, setToken } from '../slices/persist';
import toast from 'react-hot-toast';
import { setInitAuthentication, setUserWalletTransactions, userSelector } from '../slices/user';
import { useRouter } from 'next/router';

export default function useFetchWalletTransactions(itemsPerPage) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userWalletTransactions } = useSelector(userSelector);
  const { token, isLoggedIn } = useSelector(persistSelector);
  const [transactions, setTransactions] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [tableLoading, setTabelLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userWalletTransactions) {
      fetchTransactions();
    } else {
      setTransactions(userWalletTransactions?.docs);
      setData(userWalletTransactions);
      setPageLoading(false);
    }
  }, [userWalletTransactions]);

  async function fetchTransactions(currentPage = 0) {
    if (token && isLoggedIn) {
      setTabelLoading(true);
      const resp = await getUserWalletTransactions(token, currentPage, itemsPerPage);

      if (resp?.error?.status === 401) {
        toast.error('Your login token is invalid!');
        router.push('/');
        dispatch(setInitAuthentication('signIn'));
        dispatch(setToken(null));
        return;
      }

      if (resp?.error) {
        toast.error('Something went wrong');
        setError(resp?.error);
        setPageLoading(false);
        setTabelLoading(false);
      }

      if (resp?.data) {
        dispatch(setUserWalletTransactions(resp.data));
        const { docs } = resp.data;
        setData(resp.data);
        setTransactions(docs);
        setPageLoading(false);
        setTabelLoading(false);
      }
    }
  }

  return {
    data,
    transactions,
    error,
    tableLoading,
    pageLoading,
    init: (page) => fetchTransactions(page),
  };
}
