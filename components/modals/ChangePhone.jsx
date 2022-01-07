import { useEffect, useState } from 'react';

import PrimaryButton from '../Buttons/PrimaryButton';
import FormInput from '../forms/FormInput';

const ChangePhone = ({ setStep }) => {
  function onSubmit() {
    localStorage.setItem('authPhone', phone);
    setStep(1);
  }

  return (
    <form className="px-8">
      <div className="mt-6">
        <div className="text-center">
          <div className="text-2xl text-primary-darker font-bold">
            Change phone number
          </div>
          <p className="text-sm font-semibold text-gray-400">
            Your token will be sent to this number
          </p>
        </div>
        <div className="mt-6">
          <FormInput
            className="py-2.5 px-4 mt-2"
            type="phone"
            id="phone"
            label="Phone number"
            value={phone}
            isValid={(value, country) => {
              if (value.match(/12345/)) {
                return 'Invalid value: ' + value + ', ' + country.name;
              } else if (value.match(/1234/)) {
                return false;
              } else {
                return true;
              }
            }}
            onChange={value => setPhone(value)}
          />
          <div className="mt-10">
            <PrimaryButton onClick={onSubmit} size="base">
              Confirm details
            </PrimaryButton>
          </div>
        </div>
      </div>
    </form>
  );
};

ChangePhone.propTypes = {};

export default ChangePhone;
