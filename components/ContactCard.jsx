import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactCard = ({ top, light, iconLight }) => {
  return (
    <div
      className={`${
        top ? 'top-24 2xl:top-40' : null
      } hidden lg:flex items-center relative`}
    >
      {!iconLight ? (
        <div className="bg-primary-base rounded-full text-center py-3 text-white w-10 h-10">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="text-xl w-4 h-4 mx-auto"
          />
        </div>
      ) : (
        <div className="bg-white rounded-full text-center py-3 text-primary-base w-10 h-10">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="text-xl w-4 h-4 mx-auto"
          />
        </div>
      )}
      <div className="ml-4">
        <p
          className={`${
            light ? 'text-gray-400' : 'text-font-darker'
          } text-xs relative top-1`}
        >
          Need help?
        </p>
        <p
          className={`${
            light ? 'text-white' : 'text-font-darker'
          } text-lg font-semibold font-gill`}
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
