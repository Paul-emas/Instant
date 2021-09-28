import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactCard = ({ top, light }) => {
  return (
    <div
      className={`${
        top ? 'top-24 2xl:top-40' : null
      } flex items-center relative`}>
      <div className="bg-primary-base rounded-full text-center py-2.5 text-white w-10 h-10">
        <FontAwesomeIcon icon={faPhoneAlt} className="text-xl" />
      </div>
      <div className="ml-4">
        <p
          className={`${
            light ? 'text-gray-400' : 'text-font-darker'
          } text-xs relative top-1`}>
          Need help?
        </p>
        <p
          className={`${
            light ? 'text-white' : 'text-font-darker'
          } text-lg font-semibold font-gill`}>
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
