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
import { setInitAuthentication } from '../../slices/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Wrapper = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(persistSelector);
  const protectedRoutes = ['/dashboard', '/transactions', '/meters', '/solar', '/profile'];
  const [pageLoading, setPageLoading] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  let isRouteProtected = false;

  protectedRoutes.forEach((route) => {
    if (router.asPath.includes(route)) {
      isRouteProtected = true;
    }
    return isRouteProtected;
  });

  useEffect(() => {
    const handleStart = (url) => url !== router.pathname && !isRouteProtected && setPageLoading(true);
    const handleComplete = (url) => {
      url !== router.pathname && setPageLoading(false);
      window.scrollTo(0, 0);
    };

    if (!isLoggedIn && isRouteProtected) {
      router.push('/');
      dispatch(setInitAuthentication('login'));
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
          <ModalController />
          {!isRouteProtected && (
            <div>
              <WhatsAppWidget phoneNumber="2349082333376" />
              {children}
            </div>
          )}
          {isRouteProtected && (
            <div className="min-h-screen w-full overflow-hidden bg-gray-300">
              <div className="min-h-screen">
                <Sidebar openNav={openNav} setOpenNav={setOpenNav} />
                <div className="bg-white p-0 sm:bg-primary-light">
                  <main className="main-content min-h-screen">
                    <div className="flex h-14 items-center justify-between px-4 sm:hidden">
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
                      <div className="flex">
                        <div onClick={() => router.push('/profile')}>
                          <Image
                            src="/images/profile.jpg"
                            width={26}
                            height={26}
                            alt="user profile image"
                            objectFit="cover"
                            className="rounded-full"
                          />
                        </div>
                        <MenuIcon className="ml-1" onClick={() => setOpenNav(true)} />
                      </div>
                    </div>
                    <div className="px-4 2xl:px-7">
                      <div className="-mb-3 pt-3">
                        <div
                          className={`flex w-full items-center justify-center rounded-xl bg-yellow-400 py-3 px-4 text-center text-xs font-semibold duration-300 lg:text-sm`}
                        >
                          <FontAwesomeIcon icon={faExclamationTriangle} className="hidden h-4 w-4 text-sm lg:block" />
                          <span className="ml-1">
                            Welcome to the new Instant Energy website. Transactions will resume on{' '}
                            <strong>25th March 2022 </strong>
                          </span>
                        </div>
                      </div>
                      {children}
                    </div>
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
