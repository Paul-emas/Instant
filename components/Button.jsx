import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ loading, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary-base hover:bg-primary-hover scale active:bg-primary-active text-sm px-6 py-2.5 text-white font-medium rounded-md">
      {children}
    </button>
  );
};

Button.defaultProps = {
  loading: false,
};

Button.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
