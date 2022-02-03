import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMeters } from '../api';
import { persistSelector } from '../slices/persist';
import { setUserMeter, userSelector } from '../slices/user';

export default function useFetchMeters() {
  const dispatch = useDispatch();
  const [meters, setMeters] = useState([]);
  const { userMeters } = useSelector(userSelector);
  const { token, isLoggedIn } = useSelector(persistSelector);

  useEffect(() => {
    if (!userMeters) {
      getMeters();
    } else {
      setMeters(userMeters?.docs);
    }
  }, [userMeters]);

  async function getMeters() {
    if (isLoggedIn) {
      const resp = await getUserMeters(token);

      if (resp?.error) {
        toast.error('Something went wrong');
      }

      if (resp?.data) {
        setMeters(resp?.data?.docs);
        dispatch(setUserMeter(resp?.data));
      }
    }
  }

  return meters;
}
