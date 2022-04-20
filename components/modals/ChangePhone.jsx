import { useEffect, useState } from 'react';

import SecondaryButton from '../Button/SecondaryButton';
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
          <div className="text-2xl font-bold text-primary-darker">Change phone number</div>
          <p className="text-sm font-semibold text-gray-400">Your token will be sent to this number</p>
        </div>
        <div className="mt-6">
          <FormInput
            className="mt-2 py-2.5 px-4"
            type="phone"
            id="phone"
            label="Phone number"
            value={phone}
            onChange={(value) => setPhone(value)}
          />
          <div className="mt-10">
            <SecondaryButton onClick={onSubmit} size="base">
              Confirm details
            </SecondaryButton>
          </div>
        </div>
      </div>
    </form>
  );
};

ChangePhone.propTypes = {};

export default ChangePhone;
