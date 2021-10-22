import { Fragment, useState } from 'react';

import PrimaryButton from '../Buttons/PrimaryButton';
import PinInput from '../forms/PinInput';

const ForgotPin = e => {
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <Fragment>
      <div className="w-full px-5 md:w-auth">
        <h1 className="text-32xl font-bold text-center">Enter OTP</h1>
        <p className="text-gray-700 mt-3 text-sm lg:text-base text-center">
          An OTP has been set to{' '}
          <span className="text-primary-base font-bold text-sm lg:text-base">
            +2347037786423
          </span>
        </p>
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
          <button className="text-primary-base font-bold text-sm lg:text-base">
            Resend OTP
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPin;
