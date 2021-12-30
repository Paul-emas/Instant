import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import cookie from 'js-cookie';
import {
  faCog,
  faHome,
  faMeteor,
  faMoneyBillWave,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import WalletIcon from '../../public/svgs/wallet-sm.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserCard from '../UserCard';

const Sidebar = ({ openNav, setOpenNav }) => {
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
      name: 'Meters',
      url: '/meters',
      icon: faMeteor,
      open: token ? true : false,
    },
    {
      name: 'Transactions',
      url: '/transactions',
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

  return (
    <aside className="relative">
      <div
        onClick={() => setOpenNav(!openNav)}
        className={`${
          openNav ? 'opacity-100 visible' : 'opacity-0 invisible'
        } w-full min-h-screen bg-secondary-modal bg-opacity-70 top-0 left-0 duration-200  z-40 fixed`}
      ></div>
      <div
        className={`${
          openNav ? 'left-0' : '-left-full lg:left-0'
        } min-h-screen  fixed w-72 sm:w-60 2xl:w-sidebar pt-5 2xl:pt-10 bg-primary-base bg-contain z-50 ease`}
      >
        {openLogout && (
          <div
            onClick={() => setOpenLogout(false)}
            className="fixed w-full h-full top-0 z-10"
          ></div>
        )}
        <div className="h-20 pl-5 2xl:pl-10 pr-5">
          <div className="flex items-center">
            <Link href="/">
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
                      setOpenNav(false);
                    } else {
                      router.push('/sign-up');
                      setOpenNav(false);
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
        </div>
        <UserCard animate={animate} openLogout={openLogout} />
      </div>
    </aside>
  );
};

export default Sidebar;
