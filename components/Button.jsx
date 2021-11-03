import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ loading, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary-base hover:bg-primary-hover active:bg-primary-active text-xs lg:text-sm px-3.5 lg:px-6 py-3 text-white font-medium rounded-lg"
    >
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
