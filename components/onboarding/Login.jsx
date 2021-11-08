import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSessionStorage } from 'react-use';
import { useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'libphonenumber-js/min';
import { formatPhoneNo } from '../forms/utils';
import useDispatcher from '../../hooks/useDispatcher';
import { checkUserValidation } from '../../api';

import FormInput from '../forms/FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';
import SocialCard from '../SocialCard';
import router from 'next/router';

const Login = () => {
  const { setUserPhoneNo, setUserAnonymousToken } = useDispatcher();
  const { handleSubmit, control } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [authPhone, setAuthPhone] = useSessionStorage('authPhone');

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
        router.push('/auth/sign-up');
      }
      if (data) {
        setIsLoading(false);
        const { isPin } = data;
        if (isPin) {
          setUserPhoneNo({ authPhone: payload });
          setAuthPhone(payload);
          router.push('/auth/otp/pin');
        } else {
          const { authorization } = data;
          setUserAnonymousToken({ anonymousToken: authorization });
          router.push('/auth/otp/create');
        }
      }
    }
  };

  const ValidateMobileNo = number => {
    if (number) {
      isValidPhoneNumber(number) ? setIsValid(false) : setIsValid(true);
    }
  };

  return (
    <Fragment>
      <div className="fadeIn w-full mx-auto xl:pt-28 2xl:pt-44 md:max-w-lg px-5 md:w-auth">
        <h1 className="text-32xl font-bold text-center">
          Welcome to Instant Energy
        </h1>
        <p className="text-gray-700 mt-3 text-sm lg:text-base text-center">
          Sign in to Instant Energy
        </p>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            className="py-3 lg:py-3.5 px-5 mt-2"
            type="phone"
            id="phone"
            control={control}
            placeholder="070 3778 6423"
            label="Phone number"
            error={isValid}
            onChange={e => {
              ValidateMobileNo(e);
            }}
          />
          <PrimaryButton disabled={isLoading} loading={isLoading}>
            Continue
          </PrimaryButton>
        </form>
        <div className="text-blue text-sm lg:text-base text-gray-500 mt-5">
          Dont have an account?{' '}
          <Link href="/auth/sign-up">
            <a className="text-primary-base font-bold">Register</a>
          </Link>
        </div>
        <div className="mt-20">
          <SocialCard />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
