import PropTypes from 'prop-types';

import AppleIcon from '../public/svgs/apple.svg';
import PlayStoreIcon from '../public/svgs/google-play.svg';

const DownloadButtons = ({ className, captionColor, labelColor, center }) => (
  <div
    className={`${
      center ? 'mx-auto' : 'lg:ml-0'
    } px-2.5 lg:px-0 grid grid-cols-2 gap-x-5 sm:max-w-sm lg:max-w-md mt-8 lg:mt-10`}>
    <a
      href="/"
      className={`${className} pl-2.5 sm:pl-3 lg:pl-4 py-2.5 rounded-xl inline-flex items-center`}>
      <PlayStoreIcon className="w-8 h-8 lg:w-10 lg:h-10" />
      <div className="ml-1 sm:ml-2 mt-0.5 lg:mt-1 text-left">
        <p className={`${captionColor} text-xxs lg:text-xs`}>Get it on</p>
        <p className={`${labelColor} text-xs lg:text-lg font-semibold`}>
          Play Store
        </p>
      </div>
    </a>
    <a
      href="/"
      className={`${className} pl-2.5 sm:pl-3 lg:pl-4 py-2.5 rounded-xl inline-flex items-center`}>
      <AppleIcon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
      <div className="ml-1 sm:ml-2 mt-0.5  text-left">
        <p className={`${captionColor} text-xxs lg:text-xs`}>Download on the</p>
        <p className={`${labelColor} text-xs lg:text-lg font-semibold`}>
          App Store
        </p>
      </div>
    </a>
  </div>
);

DownloadButtons.defaultProps = {
  className: 'bg-primary-darker',
  captionColor: 'text-white',
  labelColor: 'text-white',
  center: false,
};

DownloadButtons.propTypes = {
  className: PropTypes.string.isRequired,
  captionColor: PropTypes.string,
  labelColor: PropTypes.string,
  center: PropTypes.bool,
};

export default DownloadButtons;
