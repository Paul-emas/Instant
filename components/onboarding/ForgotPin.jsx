import { Fragment, useState } from 'react';
import PinInput from 'react-pin-input';

import PrimaryButton from '../Buttons/PrimaryButton';

const ForgotPin = e => {
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <Fragment>
      <div className="fadeIn w-full px-5 mx-auto py-44 2xl:py-64 md:w-auth">
        <h1 className="text-32xl font-bold text-center ">
          {`We've sent you an OTP to reset your password`}
        </h1>
        <p className="text-gray-700 mt-3 text-sm lg:text-base text-center">
          An OTP has been set to{' '}
          <span className="text-primary-base font-bold text-sm lg:text-base">
            +2347037786423
          </span>{' '}
          enter <br /> OTP to continue
        </p>
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
          <button className="text-primary-base font-bold text-sm lg:text-base">
            Resend OTP
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPin;
