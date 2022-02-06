import Image from 'next/image';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UsersIcons from '../public/svgs/refer-users.svg';

const UserProfile = () => {
  return (
    <>
      <div className="text-center">
        <Image
          src="/images/profile.jpg"
          width={80.5}
          height={80.5}
          alt="user profile image"
          objectFit="cover"
          className="rounded-full"
        />
        <div className="text-2xl font-bold">Lionel Okoeguale</div>
        <button className="mt-2 rounded-lg bg-primary-light px-4 py-2 text-xs font-semibold text-primary-base active:opacity-80 lg:px-6">
          Change Profile Photo
        </button>
        <div className="mt-14 px-10">
          <div className="mx-auto max-w-sm cursor-pointer rounded-2xl bg-secondary-green py-5 px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div>
                  <UsersIcons />
                </div>
                <div className="ml-6 text-left">
                  <div className="text-sm font-bold text-white">Refer & Earn</div>
                  <div className="text-xs text-gray-300">Earn as you refer a friend</div>
                </div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-lg px-10 outline-black">
        <div className="flex items-center justify-between border-b pb-3">
          <div>
            <div className="text-xs text-gray-400">Full name</div>
            <div className="text-base font-bold">Paul Emas</div>
          </div>
          <div>
            <button className="rounded-lg bg-primary-light py-2 px-4 text-xs font-bold text-gray-700 active:bg-gray-200">
              Edit
            </button>
          </div>
        </div>
        <div className="my-3 flex items-center justify-between border-b pb-3">
          <div>
            <div className="text-xs text-gray-400">Phone number</div>
            <div className="text-base font-bold">+234 70 3778 6423</div>
          </div>
          <div>
            <button className="rounded-lg bg-primary-light py-2 px-4 text-xs font-bold text-gray-700 active:bg-gray-200">
              Edit
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">Email address</div>
            <div className="text-base font-bold">lionelokoeguale@gmail.com</div>
          </div>
          <div>
            <button className="rounded-lg bg-primary-light py-2 px-4 text-xs font-bold text-gray-700 active:bg-gray-200">
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
