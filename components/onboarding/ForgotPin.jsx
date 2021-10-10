import { Fragment, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import FormInput from '../forms/FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';

const ForgotPin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = data => {
    setIsLoading(true);
  };

  return (
    <Fragment>
      <div className="w-auth">
        <h1 className="text-32xl font-bold text-center">Enter OTP</h1>
        <p className="text-gray-700 mt-3 text-center">
          An OTP has been set to{' '}
          <span className="text-primary-base font-bold">+2347037786423</span>
        </p>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            className="py-3.5 px-5 mt-4"
            type="password"
            id="pin"
            placeholder="Enter pin"
            label="Pin"
            pattern="[0-9]{4}"
            maxlength="4"
            {...register('pin', {
              required: 'You missed this field',
            })}
          >
            {isValid && (
              <div className="mt-2 text-sm font-bold text-red-500 capitalize">
                Enter a valid Phone Number
              </div>
            )}
          </FormInput>
          <PrimaryButton disabled={isLoading} loading={isLoading}>
            Continue
          </PrimaryButton>
        </form>
        <div className="text-center mt-10">
          <button className="text-primary-base font-bold">Resend OTP</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPin;
