import PropTypes from 'prop-types';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrimaryButton = ({ loading, className, disabled, children }) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`${
        disabled
          ? 'opacity-70 pointer-events-none'
          : 'active:translate-y-0 hover:-translate-y-1'
      } ${className} btn h-14 lg:h-16 bg-primary-base btn-white transform uppercase`}
    >
      {loading ? (
        <FontAwesomeIcon icon={faBolt} className="w-7 h-7 mx-auto loading" />
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

PrimaryButton.propType = {
  loading: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default PrimaryButton;
