import React from 'react';

const Notifications = () => {
  return (
    <div className="mx-auto max-w-lg px-10 outline-black">
      <div className="flex items-center justify-between border-b pb-3">
        <div>
          <div className="text-base font-bold">Email</div>
          <div className="text-xs text-gray-400">Receive electricity token receipts via email</div>
        </div>
        <div>
          <div className="relative cursor-pointer">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block h-8 w-14 rounded-full bg-secondary-green"></div>
            <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"></div>
          </div>
        </div>
      </div>
      <div className="my-3 flex items-center justify-between border-b pb-3">
        <div>
          <div className="text-base font-bold">SMS</div>
          <div className="text-xs text-gray-400">Receive electricity token receipts via sms</div>
        </div>
        <div>
          <div className="relative cursor-pointer">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block h-8 w-14 rounded-full bg-secondary-green"></div>
            <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"></div>
          </div>
        </div>
      </div>
      <div className="mb-3 flex items-center justify-between border-b pb-3">
        <div>
          <div className="text-base font-bold">Push notifications</div>
          <div className="text-xs text-gray-400">Receive push notifications</div>
        </div>
        <div>
          <div className="relative cursor-pointer">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block h-8 w-14 rounded-full bg-secondary-green"></div>
            <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-base font-bold">News letters</div>
          <div className="text-xs text-gray-400">Receive featured articles and latest news</div>
        </div>
        <div>
          <div className="relative cursor-pointer">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block h-8 w-14 rounded-full bg-secondary-green"></div>
            <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
