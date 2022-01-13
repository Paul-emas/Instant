import { useEffect } from 'react';
import router from 'next/router';
import { useSelector } from 'react-redux';
import { persistSelector } from '../../slices/persist';

const DashboardWrapper = ({ children }) => {
  const { isLoggedIn, token } = useSelector(persistSelector);
  useEffect(() => {
    if (!token && !isLoggedIn) {
      router.replace('/');
    }
  }, [token, isLoggedIn]);
  return <>{children}</>;
};

export default DashboardWrapper;
