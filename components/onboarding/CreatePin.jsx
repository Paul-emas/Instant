import { Fragment, useEffect, useState } from 'react';
import router from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { createUserAuthPin } from '../../api';
import PinInput from 'react-pin-input';

import PrimaryButton from '../Buttons/PrimaryButton';
import ErrorAlert from '../forms/ErrorAlert';
import { useSelector } from 'react-redux';
import { persistSelector } from '../../slices/persist';

const CreatePin = () => {
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
    <Fragment>
      <div className="fadeIn w-full px-5 mx-auto py-44 2xl:py-64 md:w-auth">
        <h1 className="text-32xl font-bold text-center ">
          Secure your account by creating a PIN{' '}
        </h1>
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

export default CreatePin;
