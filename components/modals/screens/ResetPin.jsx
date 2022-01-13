import { useEffect, useState } from 'react';
import Link from 'next/link';
import router from 'next/router';
import PinInput from 'react-pin-input';
import { useDispatch, useSelector } from 'react-redux';
import { persistSelector } from '../../../slices/persist';

import Modal from '../index';
import ErrorAlert from '../../forms/ErrorAlert';
import PrimaryButton from '../../Buttons/PrimaryButton';
import BottomDownload from '../BottomDownload';

const ResetPin = ({ close, setStep }) => {
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
    if (!navigator.onLine) {
      dispatch(setInitAuthentication('offline'));
      return;
    }
  };

  return (
    <Modal border={false} close={close}>
      <div className="px-6 lg:px-8 -mt-4">
        <h1 className="text-2xl font-bold max-w-xs mx-auto text-center">
          {`We've sent you an OTP to reset your PIN`}
        </h1>
        <p className="text-gray-700 mt-3 text-sm text-center max-w-xs mx-auto">
          An OTP has been set to your phone, kindly enter OTP to continue
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
            size="base"
            className="mt-8"
            disabled={isLoading}
            loading={isLoading}
          >
            Continue
          </PrimaryButton>
        </form>
        <div className="text-center mt-5">
          <Link href="/auth/otp/forgot">
            <button className="text-sm">
              <span>{`Didn't receive an OTP?`}</span>
              <span className="text-primary-base font-bold ml-1">Resend</span>
            </button>
          </Link>
        </div>
      </div>
      <BottomDownload />
    </Modal>
  );
};

export default ResetPin;
