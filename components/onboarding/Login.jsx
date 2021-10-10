import { Fragment, useState } from 'react';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { isValidPhoneNumber } from 'react-phone-number-input';

import FormInput from '../forms/FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';
import SocialCard from '../SocialCard';
import ErrorMessage from '../forms/ErrorMessage';

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = data => {
    setIsLoading(true);
  };

  const ValidateMobileNo = number => {
    if (number) {
      isValidPhoneNumber(number) ? setIsValid(false) : setIsValid(true);
      console.log(isValid);
    }
  };

  return (
    <Fragment>
      <div className="w-auth">
        <h1 className="text-32xl font-bold text-center">
          Welcome to Instant Energy
        </h1>
        <p className="text-gray-700 mt-3 text-center">
          Sign in to Instant Energy
        </p>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            className="py-2.5 2xl:py-3.5 px-5 mt-2"
            type="phone"
            id="phone"
            control={control}
            placeholder="070 3778 6423"
            label="Phone number"
            onChange={e => {
              ValidateMobileNo(e);
            }}
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
        <div className="text-blue text-gray-500 mt-5">
          Dont have an account?{' '}
          <Link href="/auth/sign-up">
            <a className="text-primary-base font-bold">Register</a>
          </Link>
        </div>
        <div className="mt-20">
          <SocialCard />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
