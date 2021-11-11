import React, { useState } from 'react';
import { validate } from './utils';

const PinInput = ({ label, pin, placeholder, setPin, props }) => {
  const [error, setError] = useState(false);
  const errorStyles = `${
    error
      ? 'border-red-600 focus:border-red-600 focus:outline-none'
      : 'focus:bg-primary-light focus:border-primary-base focus:border-skin-theme focus:outline-none'
  }`;

  const validatePinInput = e => {
    if (e.target.value.length < 6) {
      setError(true);
    } else {
      setError(false);
    }
    return validate(e);
  };

  return (
    <div className="mb-2.5 2xl:mb-4">
      <label className="text-gray-400 font-bold text-sm label">{label}</label>
      <input
        className={`${errorStyles} py-2.5 2xl:py-3.5 px-5 mt-2 form-input`}
        type="password"
        value={pin}
        maxLength="6"
        autoComplete="off"
        minLength="6"
        placeholder={placeholder}
        {...props}
        onChange={e => validatePinInput(e) && setPin(e.target.value)}
      />
    </div>
  );
};

export default PinInput;
