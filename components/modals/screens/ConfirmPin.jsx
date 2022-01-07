import { useEffect, useState } from 'react';
import Link from 'next/link';
import router from 'next/router';
import PinInput from 'react-pin-input';
import { toast } from 'react-toastify';

import { useSelector } from 'react-redux';
import { persistSelector } from '../../../slices/persist';
import { createUserAuthPin } from '../../../api';

import Modal from '../index';
import PrimaryButton from '../../Buttons/PrimaryButton';
import ErrorAlert from '../../forms/ErrorAlert';
import BottomDownload from '../BottomDownload';

const ConfirmPin = ({ close, setStep }) => {
  const { anonymousToken } = useSelector(persistSelector);

  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async e => {
    if (anonymousToken) {
      e !== undefined && e.preventDefault();
      setIsLoading(true);
      const { status, error } = await createUserAuthPin(
        { pin },
        anonymousToken,
      );

      if (error) {
        setIsLoading(false);
        setErrorMessage(error.data.errors[0].message);
        return;
      }

      if (status === 200) {
        setIsLoading(false);
        router.push('/auth/otp/pin');
        toast.success('Successfully created pin! Proceed to Login.');
      }
    }
  };

  useEffect(() => {
    if (pin?.length === 6) {
      onSubmit();
    }
  }, [pin]);

  return (
    <Modal border={false} goBack={() => setStep('createPin')} close={close}>
      <div className="px-6 lg:px-8 mt-2">
        <h1 className="text-2xl font-bold max-w-xs mx-auto text-center">
          {`Let's make sure you don't forget, confirm your PIN`}
        </h1>
        <p className="text-gray-700 mt-3 text-sm text-center max-w-xs mx-auto">
          Your pin will be used to login to your account
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
            Create PIN
          </PrimaryButton>
        </form>
        <div className="text-center mt-5">
          <Link href="/auth/otp/forgot">
            <button className="text-sm">
              <span>Already have an account?</span>
              <span className="text-primary-base font-bold ml-1">
                Enter phone
              </span>
            </button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmPin;
