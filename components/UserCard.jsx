import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { setUser, userSelector } from '../slices/user';
import { persistSelector, setToken, setIsLoggedIn } from '../slices/persist';
import { getUserAccount } from '../api';

import LogoutIcon from '../public/svgs/logout.svg';

const UserCard = ({ openLogout, animate, setOpenNav }) => {
  const router = useRouter();
  const { me } = useSelector(userSelector);
  const {
    token,
    isLoggedIn,
    userPhone: { phone },
  } = useSelector(persistSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!me && isLoggedIn) {
      fetchUser();
    }
  }, [me, isLoggedIn]);

  async function fetchUser() {
    const resp = await getUserAccount(token);
    if (resp?.error) {
      dispatch(setUser(null));
    }
    if (resp?.data) {
      dispatch(setUser(resp?.data));
    }
  }

  const signOut = () => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    dispatch(setIsLoggedIn(false));
    setOpenNav(false);
    router.push('/');
  };

  return (
    <div className="absolute w-full bottom-12 left-0">
      <div className="px-3 2xl:px-6">
        <div className="bg-white py-4 px-5 rounded-xl flex items-center relative">
          {!me && (
            <>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="ml-3 mt-0.5 w-28 font-bold">
                <div className="h-3 w-4/5 2xl:w-full rounded-sm bg-gray-200"></div>
                <div className="h-2.5 w-1/2 mt-1 rounded-sm bg-gray-200"></div>
              </div>
            </>
          )}
          {me && (
            <>
              <Image src="/images/profile.jpg" width={32} height={32} />
              <div className="ml-3 relative top-1 w-28 font-bold">
                <p className="text-xs -mb-1.5 truncate">
                  {me?.firstName ?? 'Anonymous'}
                </p>
                <span className="text-primary-base hover:text-primary-hover text-xxs font-semibold">
                  {phone?.number}
                </span>
              </div>
              <FontAwesomeIcon
                icon={faEllipsisH}
                onClick={animate}
                className="w-4 h-4 ml-auto text-gray-400 cursor-pointer"
              />
            </>
          )}
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
  );
};

export default UserCard;