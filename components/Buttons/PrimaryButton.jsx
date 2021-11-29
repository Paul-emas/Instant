import PropTypes from 'prop-types';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrimaryButton = ({
  loading,
  className,
  size = 'large',
  disabled,
  children,
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
      className={`${
        disabled
          ? 'opacity-70 pointer-events-none'
          : 'active:translate-y-0 hover:-translate-y-1'
      } ${className} ${height} btn bg-primary-base flex items-center justify-center btn-white transform uppercase`}
    >
      {loading ? (
        <FontAwesomeIcon
          icon={faBolt}
          className="text-lg lg:text-xl w-5 h-5 lg:w-6 lg:h-6 mx-auto loading"
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
