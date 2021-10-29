import { Fragment, useEffect, useState } from 'react';
import router from 'next/router';
import Link from 'next/link';
import { useSessionStorage } from 'react-use';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { logIn } from '../../api';
import cookie from 'js-cookie';

import useDispatcher from '../../hooks/useDispatcher';
import PrimaryButton from '../Buttons/PrimaryButton';
import PinInput from '../forms/PinInput';
import ErrorAlert from '../forms/ErrorAlert';

const VerifyPin = () => {
  let {
    auth: { authPhone },
  } = useGlobalContext();
  const { setUserAccount } = useDispatcher();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [pin, setPin] = useState('');

  if (!authPhone) {
    authPhone = useSessionStorage('authPhone')[0];
  }

  useEffect(() => {
    authPhone === null && router.replace('/auth/sign-in');
  }, [authPhone]);

  const onSubmit = async e => {
    e.preventDefault();
    if (authPhone && pin.length === 6) {
      setIsLoading(true);
      const payload = {
        ...authPhone,
        pin: pin,
      };
      const { data, error } = await logIn(payload);

      if (error) {
        setIsLoading(false);
        setErrorMessage(error.data.errors[0].message);
        return;
      }

      if (data) {
        setIsLoading(false);
        const { account, authorization } = data;
        setUserAccount({ user: { account } });
        cookie.set('token', authorization);
        router.push('/dashboard');
      }
    }
  };

  return (
    <Fragment>
      <div className="fadeIn w-full px-5 mx-auto lg:py-32 2xl:py-56 md:w-auth">
        <h1 className="text-32xl font-bold text-center">Enter your PIN</h1>
        <p className="text-gray-700 mt-3 text-sm lg:text-base text-center">
          Your 6-digit access code
        </p>
        {errorMessage && (
          <ErrorAlert error={errorMessage} setError={setErrorMessage} />
        )}
        <form className="mt-10" onSubmit={onSubmit}>
          <PinInput
            label="Enter Pin"
            placeholder="Enter pin"
            pin={pin}
            setPin={setPin}
          />
          <PrimaryButton disabled={isLoading} loading={isLoading}>
            Continue
          </PrimaryButton>
        </form>
        <div className="text-center mt-10">
          <Link href="/auth/otp/forgot">
            <a className="text-primary-base font-bold text-sm lg:text-base">
              Forgot Pin
            </a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default VerifyPin;
