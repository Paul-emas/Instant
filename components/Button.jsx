import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ loading, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary-base px-7 py-2.5 text-white font-semibold rounded-md">
      {children}
    </button>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
