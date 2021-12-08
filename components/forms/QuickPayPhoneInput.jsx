import { useState } from 'react';
import router from 'next/router';
import useDispatcher from '../../hooks/useDispatcher';
import { useForm } from 'react-hook-form';
import { useSessionStorage } from 'react-use';
import { isValidPhoneNumber } from 'libphonenumber-js/min';
import cookie from 'js-cookie';
import isEmail from 'is-email';

import { checkUserValidation } from '../../api';
import { formatPhoneNo } from './utils';

import FormInput from './FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';

const QuickPayPhoneInput = ({
  setUserEmail,
  setActiveTab,
  setOpenQuickBuyModal,
}) => {
  const { setUserPhoneNo, setUserAnonymousToken } = useDispatcher();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [authPhone, setAuthPhone] = useSessionStorage('authPhone');
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
      const { phone, email } = formData;
      const { countryCode, number } = formatPhoneNo(phone);
      setUserEmail(email);
      const payload = {
        phone: {
          number,
          code: countryCode,
          value: phone,
        },
      };

      const { data, error } = await checkUserValidation(payload);
      if (error) {
        setActiveTab(0);
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
      className="px-6 lg:px-8 pt-4 2xl:px-8 2xl:pt-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        className="py-2.5 2xl:py-3.5 px-3 mt-2"
        type="phone"
        id="phone"
        placeholder="Enter your phone number"
        label="Phone number"
        control={control}
        error={errors.phone || isValid}
        onChange={e => {
          ValidateMobileNo(e);
        }}
      />
      <FormInput
        className="py-2.5 xl:py-2.5 2xl:py-3.5 px-5 mt-2"
        type="email"
        id="email"
        placeholder="Enter your Email Address"
        label="Email address"
        error={errors.email && true}
        {...register('email', {
          required: true,
          validate: value => isEmail(value),
        })}
      />
      <PrimaryButton
        className="mt-8 mb-10"
        type="large"
        disabled={isLoading}
        loading={isLoading}
      >
        Buy Electricity
      </PrimaryButton>
    </form>
  );
};

export default QuickPayPhoneInput;
