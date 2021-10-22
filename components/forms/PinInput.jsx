import React from 'react';
import { validate } from './utils';

const PinInput = ({ label, pin, placeholder, setPin, props }) => {
  return (
    <div className="mb-2.5 2xl:mb-4">
      <label className="text-gray-400 font-bold text-sm label">{label}</label>
      <input
        className="py-3.5 px-5 mt-2 form-input focus:border-skin-theme focus:outline-none"
        type="password"
        value={pin}
        maxLength="6"
        minLength="6"
        placeholder={placeholder}
        {...props}
        onChange={e => validate(e) && setPin(e.target.value)}
      />
    </div>
  );
};

export default PinInput;
