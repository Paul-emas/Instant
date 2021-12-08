import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'libphonenumber-js/min';
import { useSessionStorage } from 'react-use';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import useDispatcher from '../../hooks/useDispatcher';
import { formatPhoneNo } from '../forms/utils';

import PrimaryButton from '../Buttons/PrimaryButton';
import FormInput from '../forms/FormInput';

const ChangePhone = ({ setStep }) => {
  let {
    auth: { authPhone },
  } = useGlobalContext();
  const [, setPhone] = useSessionStorage('authPhone', authPhone);
  const { setUserPhoneNo } = useDispatcher();
  const { handleSubmit, control } = useForm();
  const [isValid, setIsValid] = useState(false);

  const ValidateMobileNo = number => {
    if (number) {
      isValidPhoneNumber(number) ? setIsValid(false) : setIsValid(true);
    }
  };

  function onSubmit(formData) {
    if (formData) {
      const { phone } = formData;
      const { countryCode, number } = formatPhoneNo(phone);
      const payload = {
        phone: {
          number,
          code: countryCode,
          value: phone,
        },
      };
      setPhone(payload);
      setUserPhoneNo({ authPhone: payload });
      setStep(1);
    }
  }

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
            defaultValue={authPhone ? authPhone.phone.value : ''}
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
