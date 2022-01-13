import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { persistSelector } from '../../slices/persist';

import MenuIcon from '../../public/svgs/menu.svg';

import Sidebar from '../layout/Sidebar';
import PageLoader from '../loaders/PageLoader';
import AuthModalController from '../modals/AuthModalController';
import { setInitAuthentication } from '../../slices/user';

const Wrapper = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(persistSelector);
  const protectedRoutes = [
    '/dashboard',
    '/transactions',
    '/meters',
    '/solar',
    '/settings',
  ];
  const [pageLoading, setPageLoading] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  let isRouteProtected = false;

  protectedRoutes.forEach(route => {
    if (router.asPath === route) {
      isRouteProtected = true;
    }
    return isRouteProtected;
  });

  useEffect(() => {
    const handleStart = url =>
      url !== router.pathname && !isRouteProtected && setPageLoading(true);
    const handleComplete = url => {
      url !== router.pathname && setPageLoading(false);
      window.scrollTo(0, 0);
    };

    console.log(isRouteProtected);

    if (!isLoggedIn && isRouteProtected) {
      router.push('/');
      dispatch(setInitAuthentication('login'));
    }

    if (isLoggedIn && !isRouteProtected) {
      router.replace('/dashboard');
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [isRouteProtected]);

  return (
    <>
      {pageLoading && <PageLoader />}
      {!pageLoading && (
        <>
          <AuthModalController />
          {!isRouteProtected && <div>{children}</div>}
          {isRouteProtected && (
            <div className="min-h-screen w-full overflow-hidden bg-gray-300">
              <div className="min-h-screen">
                <Sidebar openNav={openNav} setOpenNav={setOpenNav} />
                <div className="p-0 pb-8 bg-white sm:bg-primary-light">
                  <main className="min-h-screen main-content">
                    <div className="flex sm:hidden justify-between items-center h-14 px-4">
                      <div className="container mx-auto">
                        <div className="relative top-1">
                          <Link href="/">
                            <a>
                              <Image
                                src="/images/logo.webp"
                                width={140.13}
                                height={40.23}
                                className="object-contain"
                                priority={true}
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <MenuIcon onClick={() => setOpenNav(true)} />
                    </div>
                    <div className="px-4 2xl:px-7">{children}</div>
                  </main>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Wrapper;
