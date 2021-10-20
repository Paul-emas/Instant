import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSessionStorage } from 'react-use';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import cookie from 'js-cookie';

import DashboardIcon from '../../public/svgs/dashboard.svg';
import LockIcon from '../../public/svgs/lock.svg';
import MeterIcon from '../../public/svgs/meter.svg';
import PaymentIcon from '../../public/svgs/payment.svg';
import UserIcon from '../../public/svgs/user.svg';
import LogoutIcon from '../../public/svgs/logout.svg';

const Sidebar = props => {
  const router = useRouter();
  const [, setAuthPhone] = useSessionStorage('authPhone');
  const routes = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: DashboardIcon,
    },
    {
      name: 'Solar Electricity',
      url: '/solar',
      icon: LockIcon,
    },
    {
      name: 'My metres',
      url: '/meters',
      icon: MeterIcon,
    },
    {
      name: 'Payments',
      url: '/payments/history',
      icon: PaymentIcon,
    },
    {
      name: 'Profile',
      url: '/settings/profile',
      icon: UserIcon,
    },
  ];

  const signOut = () => {
    cookie.remove('token');
    setAuthPhone(null);
    router.push('/');
  };

  return (
    <aside>
      <div className="min-h-screen fixed w-56 2xl:w-sidebar left-0 pt-5 2xl:pt-10 bg-primary-base bg-contain overlay">
        <div className="h-20 pl-5 2xl:pl-10 pr-5">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
            <Image
              src="/images/logo-light.png"
              width={181.42}
              height={34.95}
              className="object-contain ml-3"
            />
          </div>
        </div>
        <div className="border-b border-t border-primary-border pl-5 2xl:pl-10 pr-5 2xl:pr-6">
          <div className="flex items-center justify-between py-6">
            <div>
              <div className="text-xs flex items-center text-primary-border">
                <span>Wallet balance</span>
                <div className="w-4 h-4 bg-white ml-2 rounded-full text-primary-base flex items-center justify-center text-xxs font-bold">
                  <p className="pt-0.5">?</p>
                </div>
              </div>
              <h2 className="text-white font-bold text-xl mt-1.5">
                NGN : <span>32, 032</span>
              </h2>
            </div>
            <button className="w-7 h-7 bg-white hover:bg-gray-100 scale rounded-md cursor-pointer text-primary-base font-light text-center text-2xl">
              <span className="relative -top-0.5">+</span>
            </button>
          </div>
        </div>
        <div className="px-3 2xl:px-6 space-y-2.5 2xl:space-y-5 py-8">
          {routes.map(({ name, url, icon }) => {
            const Icon = icon;
            return (
              <Link href={url} key={name}>
                <button
                  className={`${
                    url === router.asPath
                      ? 'text-primary-base bg-white active-icon'
                      : 'text-white hover:bg-primary-hover'
                  } pl-4 w-full rounded-xl text-left py-3.5 duration-100`}
                >
                  <span className="flex items-center">
                    <Icon />
                    <span className="text-sm font-bold ml-5 mt-1">{name}</span>
                  </span>
                </button>
              </Link>
            );
          })}

          {/* <button className="pl-4 bg-white w-full rounded-lg text-left h-12 text-primary-base">
            <span className="flex items-center">
              {/* <FontAwesomeIcon icon={faChartPie} className="text-xl mr-3" /> 
              <DashboardIcon className="mr-3" />
              <span className="text-sm font-bold mt-1">Dashboard</span>
            </span>
          </button> 
          */}
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
