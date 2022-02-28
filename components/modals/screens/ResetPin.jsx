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
    if (pin?.length === 6) {
      onSubmit();
    }
  }, [pin]);

  const onSubmit = async (e) => {
    if (!navigator.onLine) {
      dispatch(setInitAuthentication('offline'));
      return;
    }
  };

  return (
    <Modal border={false} close={close} isAuth>
      <div className="-mt-4 px-6 lg:px-8">
        <h1 className="mx-auto max-w-xs text-center text-2xl font-bold">
          {`We've sent you an OTP to reset your PIN`}
        </h1>
        <p className="mx-auto mt-3 max-w-xs text-center text-sm text-gray-700">
          An OTP has been set to your phone, kindly enter OTP to continue
        </p>
        {errorMessage && <ErrorAlert error={errorMessage} setError={setErrorMessage} />}
        <form className="mt-10 flex flex-col items-center" onSubmit={onSubmit}>
          <PinInput
            length={4}
            secret
            onChange={(value) => setPin(value)}
            type="numeric"
            className="hidden"
            inputMode="number"
            autoSelect={true}
          />
          <PrimaryButton size="base" className="mt-8" loading={isLoading}>
            Continue
          </PrimaryButton>
        </form>
        <div className="mt-5 text-center">
          <button className="text-sm">
            <span>{`Didn't receive an OTP?`}</span>
            <span className="ml-1 font-bold text-primary-base">Resend</span>
          </button>
        </div>
      </div>
      <BottomDownload />
    </Modal>
  );
};

export default ResetPin;
