import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import { useSessionStorage } from 'react-use';
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

const Sidebar = props => {
  const router = useRouter();
  const [phone, setAuthPhone] = useSessionStorage('authPhone');
  const [openLogout, setOpenLogout] = useState(false);
  const { user } = useGlobalContext();
  const token = cookie.get('token');

  console.log(user);

  const routes = [
    {
      name: 'Home',
      url: '/dashboard',
      icon: faHome,
    },
    {
      name: 'Solar Electricity',
      url: '/solar',
      icon: faSun,
    },
    {
      name: 'My metres',
      url: '/meters',
      icon: faMeteor,
    },
    {
      name: 'Payments',
      url: '/payments/history',
      icon: faMoneyBillWave,
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: faCog,
    },
  ];

  const animate = () => {
    setOpenLogout(!openLogout);
  };

  const signOut = () => {
    cookie.remove('token');
    setAuthPhone(null);
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
              <div className="w-8 h-8 flex justify-center items-center bg-white bg-opacity-20  scale rounded-lg text-white">
                <WalletIcon />
              </div>
              <div className="relative top-0.5">
                <div className="text-xxs flex items-center text-primary-label">
                  <span>Your IE wallet</span>
                </div>
                <p className="text-white font-gill font-semibold -mt-1">
                  &#x20A6; : <span>0.00</span>
                </p>
              </div>
            </div>
            <button className="w-fund 2xl:w-24 h-8 text-xxs 2xl:text-xs bg-white font-semibold rounded-lg cursor-pointer text-gray-800 hover:bg-gray-100 text-center">
              Fund wallet
            </button>
          </div>
        </div>
        <div className="px-3 2xl:px-6 space-y-2.5 2xl:space-y-5 py-8">
          {routes.map(({ name, url, icon }, index) => (
            <>
              {token ? (
                <Link href={url} key={index}>
                  <button
                    className={`${
                      url === router.asPath
                        ? 'text-primary-base bg-white active-icon'
                        : 'text-white  hover:bg-primary-hover'
                    } pl-6 w-full rounded-xl text-left py-4 font-gill duration-100`}
                  >
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                      <span className="text-sm font-semibold ml-5">{name}</span>
                    </span>
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => router.push('/auth/sign-up')}
                  className={`${
                    url === router.asPath
                      ? 'text-primary-base bg-white active-icon'
                      : 'text-white text-opacity-30  hover:bg-primary-hover'
                  } pl-6 w-full rounded-xl text-left py-4 font-gill duration-100`}
                >
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                    <span className="text-sm font-semibold ml-5">{name}</span>
                  </span>
                </button>
              )}
            </>
          ))}
          <div className="absolute w-full bottom-9 left-0">
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
                    className="scaleUp pl-4 absolute w-32 shadow-2xl top-12 hover:border-primary-light scale right-5 bg-white z-10 rounded-xl text-left py-3 font-gill border border-transparent"
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
