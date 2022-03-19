import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMeters } from '../api';
import { persistSelector } from '../slices/persist';
import { setInitAuthentication, setUserMeter, userSelector } from '../slices/user';

export default function useFetchMeters() {
  const dispatch = useDispatch();
  const { userMeters } = useSelector(userSelector);
  const { token, isLoggedIn } = useSelector(persistSelector);

  const [meters, setMeters] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);

  useEffect(() => {
    if (!userMeters) {
      getMeters();
    } else {
      setMeters(userMeters?.docs);
    }
  }, [userMeters]);

  async function getMeters() {
    if (isLoggedIn) {
      setPageLoading(true);
      const resp = await getUserMeters(token);

      if (resp.status === 401) {
        dispatch(setInitAuthentication('signIn'));
      }

      if (resp?.error) {
        setPageLoading(false);
        toast.error('Something went wrong');
      }

      if (resp?.data) {
        setPageLoading(false);
        setMeters(resp?.data?.docs);
        dispatch(setUserMeter(resp?.data));
      }
    }
  }

  return { meters, pageLoading, tableLoading, init: () => getMeters() };
}
