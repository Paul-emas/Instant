import { Fragment, useState } from 'react';

import PrimaryButton from '../Buttons/PrimaryButton';
import { validate } from '../forms/utils';

const ForgotPin = () => {
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = data => {
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
          <div className="mb-2.5 2xl:mb-4">
            <label className="text-gray-400 font-bold text-sm label">
              Enter Pin
            </label>
            <input
              className="py-3.5 px-5 mt-2 form-input focus:border-skin-theme focus:outline-none"
              type="password"
              id="forgot_pin"
              value={pin}
              placeholder="Enter pin"
              maxLength="6"
              onChange={e => validate(e) && setPin(e.target.value)}
            />
          </div>
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
