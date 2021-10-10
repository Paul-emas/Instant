import { Fragment, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'react-phone-number-input';

import FormInput from '../forms/FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';
import ErrorMessage from '../forms/ErrorMessage';

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = data => {
    setIsLoading(true);
    console.log(data, 'i was clicked');
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
        <h1 className="text-32xl font-bold text-center">Create an account</h1>
        <p className="text-gray-700 mt-3 text-sm lg:text-base text-center">
          Enter your phone number to continue
        </p>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            className="py-3.5 px-5 mt-4"
            type="text"
            id="name"
            placeholder="Enter your Full Name"
            label="Full name"
            {...register('name', {
              required: 'You missed this field',
            })}
          />
          <FormInput
            className="py-3.5 px-5 mt-4"
            type="email"
            id="email"
            placeholder="Enter your Email Address"
            label="Email address"
            {...register('email', {
              required: 'You missed this field',
            })}
          />
          <FormInput
            className="py-3.5 px-5 mt-4"
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
              <div className="mt-4 text-sm font-bold text-red-500 capitalize">
                Enter a valid Phone Number
              </div>
            )}
          </FormInput>
          <FormInput
            className="py-3.5 px-5 mt-4"
            type="text"
            id="referral_no"
            placeholder="Referral Code"
            label="Referral code (Optional)"
            {...register('referral_no')}
          />
          <PrimaryButton disabled={isLoading} loading={isLoading}>
            Create account
          </PrimaryButton>
        </form>
        <div className="text-blue text-gray-500 mt-5">
          Already a user?{' '}
          <Link href="/auth/sign-in">
            <a className="text-primary-base font-bold text-sm lg:text-base">
              Login
            </a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
