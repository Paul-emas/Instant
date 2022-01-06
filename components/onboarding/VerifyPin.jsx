import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  persistSelector,
  setToken,
  setIsLoggedIn,
  setQuickBuy,
} from '../../slices/persist';
import { setUser } from '../../slices/user';
import { logIn } from '../../api';
import PinInput from 'react-pin-input';

import PrimaryButton from '../Buttons/PrimaryButton';
import ErrorAlert from '../forms/ErrorAlert';

const VerifyPin = () => {
  const dispatch = useDispatch();
  const { userPhone } = useSelector(persistSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [pin, setPin] = useState('');

  useEffect(() => {
    typeof userPhone === undefined && router.replace('/auth/sign-in');
  }, [userPhone]);

  useEffect(() => {
    if (pin?.length === 6) {
      onSubmit();
    }
  }, [pin]);

  const onSubmit = async e => {
    e !== undefined && e.preventDefault();
    if (userPhone && pin.length === 6) {
      setIsLoading(true);
      const payload = {
        ...userPhone,
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
        const { user, authorization } = data;
        dispatch(setUser(user));
        dispatch(setToken(authorization));
        dispatch(setQuickBuy(false));
        dispatch(setIsLoggedIn(true));
        router.push('/dashboard');
      }
    }
  };

  return (
    <Fragment>
      <div className="fadeIn w-full px-5 mx-auto py-16 sm:py-44 2xl:py-64 md:w-auth">
        <h1 className="text-32xl font-bold text-center">Enter your PIN</h1>
        <p className="text-gray-700 mt-3 text-sm lg:text-base text-center">
          Your 6-digit access code
        </p>
        {errorMessage && (
          <ErrorAlert error={errorMessage} setError={setErrorMessage} />
        )}
        <form className="mt-10 flex items-center flex-col" onSubmit={onSubmit}>
          <PinInput
            length={6}
            secret
            onChange={value => setPin(value)}
            type="numeric"
            className="hidden"
            inputStyle={{
              border: `${errorMessage ? '2px solid red' : '2px solid #e8e8e8'}`,
            }}
            inputMode="number"
            autoSelect={true}
          />
          <PrimaryButton
            className="mt-8"
            disabled={isLoading}
            loading={isLoading}
          >
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
