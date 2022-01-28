import PropTypes from 'prop-types';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrimaryButton = ({
  loading,
  className,
  size = 'large',
  disabled,
  children,
  onClick,
}) => {
  let height = '';
  if (size === 'large') {
    height = 'h-14 lg:h-16 text-sm lg:text-base';
  } else if (size === 'base') {
    height = 'h-12 text-sm';
  } else {
    height = 'h-9 text-xs';
  }
  return (
    <button
      disabled={disabled}
      type="submit"
      onClick={onClick}
      className={`${
        disabled ? 'pointer-events-none opacity-70' : ''
      } ${className} ${height} btn btn-white flex transform items-center justify-center bg-primary-base uppercase`}
    >
      {loading ? (
        <FontAwesomeIcon
          icon={faBolt}
          className="loading mx-auto h-5 w-5 text-lg lg:h-6 lg:w-6 lg:text-xl"
        />
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
