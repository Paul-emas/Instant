import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { setUserTransactions, userSelector } from '../slices/user';
import { persistSelector } from '../slices/persist';
import { getUserTransactions } from '../api';

export default function useFetchTransaction(itemsPerPage) {
  const dispatch = useDispatch();
  const { userTransactions } = useSelector(userSelector);
  const { token, isLoggedIn } = useSelector(persistSelector);
  const [transactions, setTransactions] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [tableLoading, setTabelLoading] = useState(false);

  useEffect(() => {
    if (!userTransactions) {
      fetchTransactions();
    } else {
      setTransactions(userTransactions?.docs);
      setData(userTransactions);
      setPageLoading(false);
    }
  }, [userTransactions]);

  async function fetchTransactions(currentPage = 0) {
    if (token && isLoggedIn) {
      setTabelLoading(true);
      const resp = await getUserTransactions(token, currentPage, itemsPerPage);

      if (resp?.error) {
        toast.error('Something went wrong');
        setError(resp?.error);
        setPageLoading(false);
        setTabelLoading(false);
      }

      if (resp?.data) {
        dispatch(setUserTransactions(resp.data));
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
