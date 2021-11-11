import { useState } from 'react';
import router from 'next/router';
import useDispatcher from '../../hooks/useDispatcher';
import { useForm } from 'react-hook-form';
import { useSessionStorage } from 'react-use';
import { isValidPhoneNumber } from 'libphonenumber-js/min';
import cookie from 'js-cookie';

import { checkUserValidation } from '../../api';
import { formatPhoneNo } from './utils';

import FormInput from './FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';

const QuickPayPhoneInput = ({ setOpenQuickBuyModal }) => {
  const { setUserPhoneNo, setUserAnonymousToken } = useDispatcher();
  const { handleSubmit, control } = useForm();
  const [authPhone, setAuthPhone] = useSessionStorage('authPhone', null);
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ValidateMobileNo = number => {
    if (number) {
      isValidPhoneNumber(number) ? setIsValid(false) : setIsValid(true);
    }
  };

  const onSubmit = async formData => {
    if (formData && !isValid) {
      setIsLoading(true);
      const { phone } = formData;
      const { countryCode, number } = formatPhoneNo(phone);
      const payload = {
        phone: {
          number,
          code: countryCode,
          value: phone,
        },
      };
      const { data, error } = await checkUserValidation(payload);
      if (error) {
        setIsLoading(false);
        setUserPhoneNo({ authPhone: payload });
        setOpenQuickBuyModal(true);
      }

      if (data) {
        setIsLoading(false);
        const { isPin } = data;
        if (!cookie.get('token')) {
          if (isPin) {
            setUserPhoneNo({ authPhone: payload });
            setAuthPhone(payload);
            router.push('/auth/otp/pin');
          } else {
            const { authorization } = data;
            setUserAnonymousToken({ anonymousToken: authorization });
            router.push('/auth/otp/create');
          }
        } else {
          router.push('/dashboard');
        }
      }
    }
  };

  return (
    <form
      className="px-6 lg:px-8 pt-4 pb-8 2xl:p-8 2xl:pt-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        className="py-2.5 2xl:py-3.5 px-5 mt-2"
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
      <PrimaryButton disabled={isLoading} loading={isLoading}>
        Continue
      </PrimaryButton>
    </form>
  );
};

export default QuickPayPhoneInput;
