import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactCard = ({ top }) => {
  return (
    <div
      className={`${
        top ? 'top-24 2xl:top-40' : null
      } flex items-center relative`}>
      <div className="bg-primary-base rounded-xl text-center py-2.5 text-white w-10 h-10">
        <FontAwesomeIcon icon={faPhoneAlt} className="text-xl" />
      </div>
      <div className="ml-4">
        <p className="text-sm text-font-darker relative top-1">Helpline</p>
        <p className="text-lg font-bold text-font-darker">080-1234-5678</p>
      </div>
    </div>
  );
};

ContactCard.defaultProps = {
  top: false,
};

ContactCard.propTypes = {
  top: PropTypes.bool,
};

export default ContactCard;
