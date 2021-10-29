import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';

import Detailbar from '../layout/Detailbar';
import Sidebar from '../layout/Sidebar';
import PageLoader from '../PageLoader';

const Wrapper = ({ children }) => {
  const router = useRouter();
  const token = cookie.get('token');
  const inActiveRoutes = ['/dashboard', '/solar'];
  const [pageLoading, setPageLoading] = useState(false);
  const authRoutes = [
    '/auth/sign-in',
    '/auth/sign-up',
    '/auth/otp/create',
    '/auth/otp/pin',
    '/auth/otp/forgot',
  ];

  let isRouteProtected = false;
  let isAuthRoute = false;

  inActiveRoutes.forEach(route => {
    if (router.asPath === route) {
      isRouteProtected = true;
    }
    return isRouteProtected;
  });
  authRoutes.forEach(route => {
    if (router.asPath === route) {
      isAuthRoute = true;
    }
    return isAuthRoute;
  });

  useEffect(() => {
    const handleStart = url =>
      url !== router.pathname &&
      !isRouteProtected &&
      !isAuthRoute &&
      setPageLoading(true);
    const handleComplete = url => {
      url !== router.pathname && setPageLoading(false);
      window.scrollTo(0, 0);
    };

    if (!token && isRouteProtected) {
      router.replace('/auth/sign-in');
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [isRouteProtected, isAuthRoute]);

  return (
    <>
      {pageLoading && <PageLoader />}
      {!isRouteProtected && !pageLoading && <div>{children}</div>}
      {token && isRouteProtected && !pageLoading && (
        <div className="h-screen overflow-x-hidden w-full bg-gray-300">
          <div className="min-h-screen">
            <Sidebar />
            <div className="overflow-x-hidden p-0 bg-primary-light">
              {/* <Detailbar /> */}
              <main className="min-h-screen main-content">
                <div className="px-5 2xl:px-7">{children}</div>
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Wrapper;
