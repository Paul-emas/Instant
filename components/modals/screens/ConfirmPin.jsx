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
  setUserPhone,
} from '../../../slices/persist';
import {
  userSelector,
  setUser,
  setInitAuthentication,
} from '../../../slices/user';
import { createUserAuthPin, signUp } from '../../../api';

import Modal from '../index';
import PrimaryButton from '../../Buttons/PrimaryButton';
import ErrorAlert from '../../forms/ErrorAlert';

const ConfirmPin = ({ close, setStep }) => {
  const dispatch = useDispatch();
  const { anonymousToken } = useSelector(persistSelector);
  const { registerData, authPin } = useSelector(userSelector);

  const [confirmPin, setConfirmPin] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (confirmPin?.length === 6) {
      onSubmit();
    }
  }, [confirmPin]);

  async function onSubmit(e) {
    e !== undefined && e.preventDefault();
    if (authPin === confirmPin) {
      if (!navigator.onLine) {
        dispatch(setInitAuthentication('offline'));
        return;
      }
      setErrorMessage(null);
      if (registerData) {
        setIsLoading(true);
        const { name, phone, country, email, referral_no } = registerData;
        const formattedPhone = phone.replace(country.countryCode, '');
        const selectedNumber = {
          phone: {
            number: phone,
            code: country.countryCode,
            value: formattedPhone,
          },
        };

        const payload = {
          firstName: name,
          lastName: '',
          email,
          pin: authPin,
          country: country.name,
          ...selectedNumber,
          ...(referral_no !== '' && { referral_no }),
        };

        const { data, error } = await signUp(payload);

        dispatch(setUserPhone(selectedNumber));

        if (error) {
          setIsLoading(false);
          setErrorMessage(error.data.errors[0].message);
          return;
        }

        if (data) {
          setIsLoading(false);
          const { account, authorization } = data;
          dispatch(setUser(account));
          dispatch(setToken(authorization));
          dispatch(setQuickBuy(false));
          dispatch(setIsLoggedIn(true));
          dispatch(setInitAuthentication(null));
          router.push('/dashboard');
        }
      }

      if (anonymousToken && !registerData) {
        setIsLoading(true);
        const { status, error } = await createUserAuthPin(
          { pin: authPin },
          anonymousToken,
        );

        if (error) {
          setIsLoading(false);
          setErrorMessage(error.data.errors[0].message);
          return;
        }

        if (status === 200) {
          setIsLoading(false);
          setSuccessMessage('Successfully created pin!');
          setTimeout(() => setStep('signIn'), 3000);
          dispatch(setInitAuthentication(null));
        }
      }
    } else {
      setErrorMessage('Incorrect pin! Kindly confirm your pin');
    }
  }

  return (
    <Modal
      successMessage={successMessage}
      border={false}
      goBack={() => setStep('createPin')}
      close={close}
    >
      <div className="px-6 lg:px-8 mt-2">
        <h1 className="text-2xl font-bold max-w-xs mx-auto text-center">
          {`Let's make sure you don't forget, confirm your PIN`}
        </h1>
        <p className="text-gray-700 mt-3 text-sm text-center max-w-xs mx-auto">
          Your pin will be used to login to your account
        </p>
        <form className="mt-10 flex items-center flex-col" onSubmit={onSubmit}>
          <PinInput
            length={6}
            secret
            onChange={value => setConfirmPin(value)}
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
            Create PIN
          </PrimaryButton>
        </form>
        <div className="text-center mt-5">
          <Link href="/auth/otp/forgot">
            <button className="text-sm">
              <span>Already have an account?</span>
              <span
                onClick={() => setStep('login')}
                className="text-primary-base font-bold cursor-pointer ml-1 hover:text-primary-hover"
              >
                Login
              </span>
            </button>
          </Link>
        </div>
      </div>
      {errorMessage && (
        <ErrorAlert error={errorMessage} setError={setErrorMessage} />
      )}
    </Modal>
  );
};

export default ConfirmPin;
