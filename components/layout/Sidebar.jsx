import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import { useSessionStorage } from 'react-use';
import cookie from 'js-cookie';

import LogoutIcon from '../../public/svgs/logout.svg';
import WalletIcon from '../../public/svgs/wallet-sm.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faMeteor,
  faMoneyBillWave,
  faSun,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = props => {
  const router = useRouter();
  const [phone, setAuthPhone] = useSessionStorage('authPhone');
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
      name: 'Profile',
      url: '/settings/profile',
      icon: faUser,
    },
  ];

  const signOut = () => {
    cookie.remove('token');
    setAuthPhone(null);
    router.push('/');
  };

  return (
    <aside>
      <div className="min-h-screen -left-full lg:left-0 fixed w-60 2xl:w-sidebar pt-5 2xl:pt-10 bg-primary-base bg-contain">
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
            <button className="w-fund 2xl:w-24 h-8 text-xxs 2xl:text-xs bg-white font-semibold rounded-lg cursor-pointer text-gray-800 hover:text-white text-center">
              Fund wallet
            </button>
          </div>
        </div>
        <div className="px-3 2xl:px-6 space-y-2.5 2xl:space-y-5 py-8">
          {routes.map(({ name, url, icon }) => (
            <Link href={url} key={name}>
              <button
                className={`${
                  url === router.asPath
                    ? 'text-primary-base bg-white active-icon'
                    : 'text-white hover:bg-primary-hover'
                } pl-6 w-full rounded-xl text-left py-4 font-gill duration-100`}
              >
                <span className="flex items-center">
                  <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                  <span className="text-sm font-semibold ml-5">{name}</span>
                </span>
              </button>
            </Link>
          ))}
          <div className="absolute w-full bottom-8 left-0">
            <div className="px-6">
              <button
                onClick={signOut}
                className="pl-4 w-full rounded-xl text-left py-3.5 text-white hover:bg-primary-hover duration-100"
              >
                <span className="flex items-center">
                  <LogoutIcon />
                  <span className="text-sm font-bold ml-5 mt-1">Logout</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
