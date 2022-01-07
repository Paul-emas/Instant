import PropTypes from 'prop-types';

import AppleIcon from '../public/svgs/apple.svg';
import AppleIcon2 from '../public/svgs/apple-dark.svg';
import PlayStoreIcon from '../public/svgs/google-play.svg';
import PlayStoreIcon2 from '../public/svgs/google-play-dark.svg';

const DownloadButtons = ({
  className,
  captionColor,
  labelColor,
  center,
  dark,
}) => (
  <div
    className={`${
      center ? 'mx-auto' : 'lg:ml-0'
    } px-2.5 lg:px-0 grid grid-cols-2 gap-x-5 sm:max-w-sm mt-8 lg:mt-10`}
  >
    <a
      href="/"
      className={`${className} pl-2.5 sm:pl-3 lg:pl-4 py-1.5 rounded-xl inline-flex items-center`}
    >
      {dark ? (
        <PlayStoreIcon2 className="w-7 h-7 sm:w-8 sm:h-8" />
      ) : (
        <PlayStoreIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      )}
      <div className="ml-1 sm:ml-2 mt-0.5 lg:mt-1 text-left">
        <p className={`${captionColor} text-xxs`}>Get it on</p>
        <p className={`${labelColor} text-xs lg:text-base font-bold`}>
          Play Store
        </p>
      </div>
    </a>
    <a
      href="/"
      className={`${className} pl-2.5 sm:pl-3 lg:pl-4 py-1.5 rounded-xl inline-flex items-center`}
    >
      {dark ? (
        <AppleIcon2 className="w-7 h-7 sm:w-8 sm:h-8" />
      ) : (
        <AppleIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      )}
      <div className="ml-1 sm:ml-2 mt-0.5  text-left">
        <p className={`${captionColor} text-xxs`}>Download on the</p>
        <p className={`${labelColor} text-xs lg:text-base font-bold`}>
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
