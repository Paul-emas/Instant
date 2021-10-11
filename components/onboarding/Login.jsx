import { Fragment, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import useDispatcher from '../../hooks/useDispatcher';

import FormInput from '../forms/FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';
import SocialCard from '../SocialCard';

const Login = () => {
  const { user } = useGlobalContext();
  const { setUserAccount, setIsLoggedIn } = useDispatcher();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = data => {
    console.log(user);
    // setUserAccount({ me: { name: 'Paul Emas' } });
  };

  const ValidateMobileNo = number => {
    if (number) {
      isValidPhoneNumber(number) ? setIsValid(false) : setIsValid(true);
      console.log(isValid);
    }
  };

  return (
    <Fragment>
      <div className="w-full px-5 md:w-auth">
        <h1 className="text-32xl font-bold text-center">
          Welcome to Instant Energy
        </h1>
        <p className="text-gray-700 mt-3 text-sm lg:text-base text-center">
          Sign in to Instant Energy
        </p>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            className="py-3.5 px-5 mt-2"
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
        <div className="text-blue text-sm lg:text-base text-gray-500 mt-5">
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
