import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactCard = ({ top, light, iconLight }) => {
  return (
    <div
      className={`${
        top ? 'top-24 2xl:top-40' : null
      } relative hidden items-center lg:flex`}
    >
      {!iconLight ? (
        <div className="flex h-10 w-10 items-center rounded-full bg-secondary-green text-center text-white">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="mx-auto h-4 w-4 text-xl"
          />
        </div>
      ) : (
        <div className="flex h-10 w-10 items-center rounded-full bg-white text-center text-primary-base">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="mx-auto h-4 w-4 text-xl"
          />
        </div>
      )}
      <div className="ml-4">
        <p
          className={`${
            light ? 'text-gray-400' : 'text-font-darker'
          } relative top-1 text-xs`}
        >
          Need help?
        </p>
        <p
          className={`${
            light ? 'text-black' : 'text-font-darker'
          } text-lg font-semibold `}
        >
          080-1234-5678
        </p>
      </div>
    </div>
  );
};

ContactCard.defaultProps = {
  top: false,
  light: false,
};

ContactCard.propTypes = {
  top: PropTypes.bool,
  light: PropTypes.bool,
};

export default ContactCard;
