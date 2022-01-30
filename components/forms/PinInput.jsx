import React, { useState } from 'react';

const PinInput = ({ label, pin, placeholder, setPin, props }) => {
  const [error, setError] = useState(false);
  const errorStyles = `${
    error
      ? 'border-red-600 focus:border-red-600 focus:outline-none'
      : 'focus:bg-primary-light focus:border-primary-base focus:border-skin-theme focus:outline-none'
  }`;

  const validate = e => {
    const regex = new RegExp(/^[0-9]*\.?[0-9]*$/);
    const value = e.target.value;
    if (value === '' || regex.test(value)) {
      return true;
    }
  };

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
      <label className="label text-sm font-bold text-gray-400">{label}</label>
      <input
        className={`${errorStyles} form-input mt-2 py-2.5 px-5 2xl:py-3.5`}
        type="password"
        value={pin}
        maxLength="6"
        autoComplete="off"
        minLength="6"
        placeholder={placeholder}
        onChange={e => validatePinInput(e) && setPin(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default PinInput;
