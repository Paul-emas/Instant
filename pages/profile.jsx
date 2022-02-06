import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faEnvelope, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import UsersIcons from '../public/svgs/refer-users.svg';
import ConversationIcon from '../public/svgs/conversation.svg';

import Tabs from '../components/tabs';
import SocialCard from '../components/SocialCard';

export default function Profile() {
  const tabsData = [
    { id: 0, name: 'Personal Info' },
    { id: 1, name: 'Security' },
    { id: 1, name: 'Notifications' },
  ];
  const [pageLoading, setPageLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* {pageLoading && (
        <div className="pt-5 sm:pt-10">
          <div className="min-h-screen w-full rounded-xl bg-primary-light sm:bg-white"></div>
        </div>
      )} */}
      <div className="shadow-soft-lg relative top-5 flex min-h-screen flex-col overflow-hidden rounded-xl bg-white">
        <div className="mt-5 py-3 px-7">
          <div className="flex w-full items-center justify-center sm:justify-between">
            <h3 className="flex items-start text-xl font-bold text-font-dark">Settings</h3>
          </div>
        </div>
        <div className="mt-10">
          <Tabs data={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="grid min-h-screen grid-cols-2">
          <div className="pt-20">
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
            <div className="mx-auto mt-14 max-w-md px-10 outline-black">
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
          </div>
          <div className="border-l pt-20">
            <div className="mx-auto max-w-sm rounded-2xl border  px-4 py-16 text-center">
              <ConversationIcon className="mx-auto" />
              <div className="mt-6 text-xl font-bold text-primary-darker">Need Help?</div>
              <div className="mt-2 text-xs text-gray-400">
                Having trouble? or want to make enquires on <br /> our products and services?
              </div>
              <button className="mt-8 rounded-lg bg-primary-base px-4 py-2 text-sm font-semibold text-primary-light active:opacity-80 lg:px-6">
                Live chat with our agent
              </button>
              <div className="my-5 text-xs text-gray-500">Or</div>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                  <FontAwesomeIcon icon={faPhoneAlt} className="h-6 w-6" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                  <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-10">
                <SocialCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
