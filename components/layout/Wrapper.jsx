import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

import { useDispatch, useSelector } from 'react-redux';
import { persistSelector } from '../../slices/persist';

import MenuIcon from '../../public/svgs/menu.svg';

import Sidebar from '../layout/Sidebar';
import PageLoader from '../loaders/PageLoader';
import ModalController from '../modals/ModalController';
import { setInitAuthentication, setOpenNav } from '../../slices/user';
import Navbar from './Navbar';

const Wrapper = ({ children, pageProps }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn, userPhone } = useSelector(persistSelector);
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    authCheck();
    const handleStart = (url) => url !== router.pathname && !pageProps?.protected && setPageLoading(true);
    const handleComplete = (url) => url !== router.pathname && setPageLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, [pageProps.protected]);

  function authCheck() {
    if (!isLoggedIn && pageProps?.protected) {
      router.push('/');
      userPhone ? dispatch(setInitAuthentication('signIn')) : dispatch(setInitAuthentication('login'));
    }
  }

  return (
    <>
      {pageLoading && <PageLoader />}
      {!pageLoading && (
        <>
          <ModalController />
          <WhatsAppWidget phoneNumber="2349082333376" />
          {!pageProps?.protected && <div>{children}</div>}
          {pageProps?.protected && (
            <div className="min-h-screen w-full overflow-hidden bg-gray-300">
              <div className="min-h-screen">
                <Sidebar />
                <div className="bg-white p-0 sm:bg-primary-light">
                  <main className="main-content min-h-screen">
                    <div className="block lg:hidden">
                      <Navbar isPageProtected={pageProps?.protected} />
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
