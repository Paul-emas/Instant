import PropTypes from 'prop-types';

import AppleIcon from '../public/svgs/apple.svg';
import PlayStoreIcon from '../public/svgs/google-play.svg';

const DownloadButtons = ({ className = 'bg-primary-darker' }) => (
  <div className="px-2.5 lg:px-0 grid grid-cols-2 gap-x-5 sm:max-w-sm lg:max-w-md mx-auto lg:ml-0 mt-8 lg:mt-10">
    <a
      href="/"
      className={`${className} pl-2.5 sm:pl-3 lg:pl-4 py-2.5 rounded-xl inline-flex items-center`}>
      <AppleIcon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
      <div className="ml-1 sm:ml-2 mt-0.5 text-white text-left">
        <p className="text-xxs lg:text-xs">Download on the</p>
        <p className="text-xs lg:text-lg font-semibold">App Store</p>
      </div>
    </a>
    <a
      href="/"
      className={`${className} pl-2.5 sm:pl-3 lg:pl-4 py-2.5 rounded-xl inline-flex items-center`}>
      <PlayStoreIcon className="w-8 h-8 lg:w-10 lg:h-10" />
      <div className="ml-1 sm:ml-2 mt-0.5 lg:mt-1 text-white text-left">
        <p className="text-xxs lg:text-xs">Get it on</p>
        <p className="text-xs lg:text-lg font-semibold">Play Store</p>
      </div>
    </a>
  </div>
);

DownloadButtons.propTypes = {
  className: PropTypes.string.isRequired,
};

export default DownloadButtons;
