import React from 'react';

import AppleIcon from '../public/svgs/apple.svg';
import PlayStoreIcon from '../public/svgs/google-play.svg';

const DownloadButtons = ({ className = 'bg-gray-900' }) => (
  <div className="px-2.5 lg:px-0 grid grid-cols-2 gap-x-5 sm:max-w-sm lg:max-w-xl mx-auto lg:ml-0 mt-8 lg:mt-10">
    <a
      href="/"
      className={`${className} pl-2.5 sm:pl-3 lg:pl-4 lg:pr-12 py-2.5 rounded-md inline-flex`}>
      <AppleIcon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-14 lg:h-14" />
      <div className="ml-1 sm:ml-2 mt-0.5 lg:mt-1 text-white text-left">
        <p className="text-xxs lg:text-xs">Download on the</p>
        <p className="text-xs lg:text-xl font-semibold">App Store</p>
      </div>
    </a>
    <a
      href="/"
      className={`${className} pl-2.5 sm:pl-3 lg:pl-4 lg:pr-12 py-2.5 rounded-md inline-flex`}>
      <PlayStoreIcon className="w-8 h-8 lg:w-14 lg:h-14" />
      <div className="ml-1 sm:ml-2 mt-0.5 lg:mt-1 text-white text-left">
        <p className="text-xxs lg:text-xs">Get it on</p>
        <p className="text-xs lg:text-xl font-semibold">Play Store</p>
      </div>
    </a>
  </div>
);

export default DownloadButtons;
