import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import cookie from 'js-cookie';
import {
  faCog,
  faEllipsisH,
  faHome,
  faMeteor,
  faMoneyBillWave,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

import LogoutIcon from '../../public/svgs/logout.svg';
import WalletIcon from '../../public/svgs/wallet-sm.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../../hooks/useGlobalContext';

const Sidebar = () => {
  const { user } = useGlobalContext();
  const router = useRouter();

  const [openLogout, setOpenLogout] = useState(false);
  const userToken = cookie.get('token');
  const [token, setToken] = useState(userToken);

  useEffect(() => {
    setToken(userToken);
  }, [userToken]);

  const routes = [
    {
      name: 'Home',
      url: '/dashboard',
      icon: faHome,
      open: true,
    },
    {
      name: 'Solar Electricity',
      url: '/solar',
      icon: faSun,
      open: token ? true : false,
    },
    {
      name: 'My Metres',
      url: '/meters',
      icon: faMeteor,
      open: token ? true : false,
    },
    {
      name: 'Payments',
      url: '/payments',
      icon: faMoneyBillWave,
      open: true,
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: faCog,
      open: token ? true : false,
    },
  ];

  const animate = () => {
    setOpenLogout(!openLogout);
  };

  const signOut = () => {
    cookie.remove('token');
    router.push('/');
  };

  return (
    <aside>
      <div className="min-h-screen -left-full lg:left-0 fixed w-60 2xl:w-sidebar pt-5 2xl:pt-10 bg-primary-base bg-contain">
        {openLogout && (
          <div
            onClick={() => setOpenLogout(false)}
            className="fixed w-full h-full top-0 z-10"
          ></div>
        )}
        <div className="h-20 pl-5 2xl:pl-10 pr-5">
          <div className="flex items-center">
            <Link href="/dashboard">
              <a>
                <Image
                  src="/images/logo-light.png"
                  width={193.42}
                  height={42}
                  className="object-cover"
                  priority={true}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="border-b border-t border-primary-border pl-5 2xl:pl-10 pr-3 2xl:pr-6">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex justify-center items-center bg-white bg-opacity-20 scale rounded-lg text-white">
                <WalletIcon />
              </div>
              <div className="relative top-0.5">
                <div className="text-xxs flex items-center text-white text-opacity-70">
                  <span>Your IE wallet</span>
                </div>
                <p className="text-white font-bold -mt-1">
                  <span>&#x20A6;</span> <span className="ml-1">0.00</span>
                </p>
              </div>
            </div>
            <button className="w-fund 2xl:w-24 h-8 text-xxs 2xl:text-xs bg-secondary-green font-semibold rounded-lg cursor-pointer text-white hover:bg-opacity-80 text-center">
              Fund wallet
            </button>
          </div>
        </div>
        <div className="px-3 2xl:px-6 space-y-2.5 2xl:space-y-5 py-8">
          {routes.map(({ name, url, icon, open }, index) => (
            <div key={index}>
              <a>
                <button
                  onClick={() => {
                    if (open) {
                      router.push(url);
                    } else {
                      router.push('/sign-up');
                    }
                  }}
                  className={`${
                    router.asPath === url
                      ? 'text-primary-base bg-white active-icon'
                      : 'text-white  hover:bg-primary-hover'
                  } ${
                    !open ? 'text-opacity-30' : ''
                  }  pl-6 w-full rounded-xl text-left py-4  duration-100`}
                >
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                    <span className="text-sm font-bold ml-5">{name}</span>
                  </span>
                </button>
              </a>
            </div>
          ))}
          <div className="absolute w-full bottom-12 left-0">
            <div className="px-3 2xl:px-6">
              <div className="bg-white py-4 px-5 rounded-xl flex items-center relative">
                {!user?.me && (
                  <>
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="ml-3 mt-0.5 w-28 font-bold">
                      <div className="h-3 w-4/5 2xl:w-full rounded-sm bg-gray-200"></div>
                      <div className="h-2.5 w-1/2 mt-1 rounded-sm bg-gray-200"></div>
                    </div>
                  </>
                )}
                {user?.me && (
                  <>
                    <Image src="/images/profile.jpg" width={32} height={32} />
                    <div className="ml-3 mt-0.5 w-28 font-bold">
                      <p className="text-sm -mb-1.5">{user?.me?.firstName}</p>
                      <Link href="/profile">
                        <a className="text-primary-base hover:text-primary-hover text-xs">
                          View Profile
                        </a>
                      </Link>
                    </div>
                  </>
                )}
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  onClick={animate}
                  className="w-4 h-4 ml-auto text-gray-400 cursor-pointer"
                />
                {openLogout && (
                  <button
                    onClick={signOut}
                    className="scaleUp pl-4 absolute w-32 shadow-2xl top-12 hover:border-primary-light scale right-5 bg-white z-10 rounded-xl text-left py-3  border border-transparent"
                  >
                    <span className="flex items-center">
                      <LogoutIcon />
                      <span className="text-sm font-bold ml-2">Logout</span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
