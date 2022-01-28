import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ loading, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-primary-base px-4 py-3 text-xs font-semibold uppercase text-white hover:bg-primary-hover active:bg-primary-active lg:px-6 lg:text-sm"
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
