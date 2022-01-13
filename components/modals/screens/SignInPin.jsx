import { useEffect, useState } from 'react';
import Link from 'next/link';
import router from 'next/router';
import PinInput from 'react-pin-input';
import { useDispatch, useSelector } from 'react-redux';
import {
  persistSelector,
  setIsLoggedIn,
  setQuickBuy,
  setToken,
} from '../../../slices/persist';
import { setInitAuthentication, setUser } from '../../../slices/user';
import { logIn } from '../../../api';

import Modal from '../index';
import ErrorAlert from '../../forms/ErrorAlert';
import PrimaryButton from '../../Buttons/PrimaryButton';
import BottomDownload from '../BottomDownload';

const SignInPin = ({ close, setStep }) => {
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
      if (!navigator.onLine) {
        dispatch(setInitAuthentication('offline'));
      }

      setIsLoading(true);
      const payload = {
        ...userPhone,
        pin: pin,
      };
      const { data, error } = await logIn(payload);

      if (error) {
        setIsLoading(false);
        setErrorMessage('Incorrect pin! Kindly confirm your pin');
        return;
      }

      if (data) {
        setIsLoading(false);
        const { user, authorization } = data;
        dispatch(setUser(user));
        dispatch(setToken(authorization));
        dispatch(setQuickBuy(false));
        dispatch(setIsLoggedIn(true));
        dispatch(setInitAuthentication(null));
        close();
        router.push('/dashboard');
      }
    }
  };

  return (
    <Modal border={false} close={close}>
      <div className="px-6 lg:px-8 -mt-4">
        <h1 className="text-2xl font-bold max-w-xs mx-auto text-center">
          Sign in to your account
        </h1>
        <p className="text-gray-700 mt-3 text-sm text-center">
          Your 6-digit access code
        </p>
        <form className="mt-10 flex items-center flex-col" onSubmit={onSubmit}>
          <PinInput
            length={6}
            secret
            onChange={value => setPin(value)}
            type="numeric"
            className="hidden"
            inputMode="number"
            autoSelect={true}
          />
          <PrimaryButton
            size="base"
            className="mt-8"
            disabled={isLoading}
            loading={isLoading}
          >
            Continue
          </PrimaryButton>
        </form>
        <div className="text-center mt-5">
          <button className="text-sm">
            <span>Having trouble getting in?</span>
            <span
              onClick={() => setStep('reset')}
              className="text-primary-base font-bold ml-1"
            >
              Forgot Pin
            </span>
          </button>
        </div>
      </div>
      {errorMessage ? (
        <ErrorAlert error={errorMessage} setError={setErrorMessage} />
      ) : (
        <BottomDownload />
      )}
    </Modal>
  );
};

export default SignInPin;
