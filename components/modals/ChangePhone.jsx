import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'libphonenumber-js/min';

import PrimaryButton from '../Buttons/PrimaryButton';
import FormInput from '../forms/FormInput';

const ChangePhone = props => {
  const { handleSubmit, control } = useForm();
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ValidateMobileNo = number => {
    if (number) {
      isValidPhoneNumber(number) ? setIsValid(false) : setIsValid(true);
    }
  };

  function onSubmit() {}

  return (
    <form className="px-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-6">
        <div className="text-center">
          <div className="text-2xl text-primary-darker font-gill">
            Change phone number
          </div>
          <p className="text-sm font-semibold text-gray-400">
            Your token will be sent to this number
          </p>
        </div>
        <div className="mt-6">
          <FormInput
            className="py-2.5 px-5 mt-2"
            type="phone"
            id="phone"
            placeholder="070 3778 6423"
            label="Phone number"
            control={control}
            error={isValid}
            onChange={e => {
              ValidateMobileNo(e);
            }}
          />
          <div className="mt-10">
            <PrimaryButton size="base">Confirm details</PrimaryButton>
          </div>
        </div>
      </div>
    </form>
  );
};

ChangePhone.propTypes = {};

export default ChangePhone;
