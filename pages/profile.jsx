import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import ConversationIcon from '../public/svgs/conversation.svg';

import Tabs from '../components/tabs';
import SocialCard from '../components/SocialCard';
import UserProfile from '../components/UserProfile';
import Security from '../components/Security';
import Notifications from '../components/Notifications';

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
      <div className="shadow-soft-lg relative top-5 flex flex-col overflow-hidden rounded-xl bg-white">
        <div className="mt-5 py-3 px-7">
          <div className="flex w-full items-center justify-center sm:justify-between">
            <h3 className="flex items-start text-xl font-bold text-font-dark">Settings</h3>
          </div>
        </div>
        <div className="mt-10">
          <Tabs data={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="grid grid-cols-2 pb-24">
          <div className="pt-20">
            <div className="slideUp">
              {activeTab === 0 && <UserProfile />}
              {activeTab === 1 && <Security />}
              {activeTab === 2 && <Notifications />}
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
