import { useEffect } from 'react';
import router from 'next/router';
import cookie from 'js-cookie';

const DashboardWrapper = ({ children }) => {
  const token = cookie.get('token');
  useEffect(() => {
    if (!token) {
      router.replace('/auth/sign-in');
    }
  }, [token]);
  return <>{children}</>;
};

export default DashboardWrapper;
