import router from 'next/router';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import { useSessionStorage } from 'react-use';
import { useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'react-phone-number-input';
import cookie from 'js-cookie';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import useDispatcher from '../../hooks/useDispatcher';
import { formatPhoneNo } from '../forms/utils';
import { signUp } from '../../api';

import FormInput from '../forms/FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';
import countries from '../../utils/countries.json';
import PinInput from '../forms/PinInput';
import ErrorAlert from '../forms/ErrorAlert';

const Register = () => {
  const { register, handleSubmit, control } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);

  let {
    auth: { authPhone },
  } = useGlobalContext();
  const { setUserAccount } = useDispatcher();

  if (!authPhone) {
    authPhone = useSessionStorage('authPhone')[0];
  }

  const [pin, setPin] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async formData => {
    if (formData) {
      setIsLoading(true);
      let selectedNumber;
      const { name, email, phone, referral_no } = formData;
      const { countryCode, countryAbb, number } = formatPhoneNo(phone);
      const seletedCountry = countries.find(({ code }) => code === countryAbb);

      if (phone !== authPhone?.phone?.value) {
        selectedNumber = {
          phone: {
            number,
            code: countryCode,
            value: phone,
          },
        };
      } else {
        selectedNumber = authPhone;
      }

      const payload = {
        firstName: name,
        lastName: '',
        email,
        pin,
        country: seletedCountry.name,
        ...selectedNumber,
        ...(referral_no !== '' && { referral_no }),
      };

      const { data, error } = await signUp(payload);

      if (error) {
        setIsLoading(false);
        setErrorMessage(error.data.errors[0].message);
        return;
      }

      if (data) {
        setIsLoading(false);
        const { account, authorization } = data;
        setUserAccount({ user: { account } });
        cookie.set('token', authorization);
        router.push('/dashboard');
      }
    }
  };

  const ValidateMobileNo = number => {
    if (number) {
      isValidPhoneNumber(number) ? setIsValid(false) : setIsValid(true);
    }
  };

  return (
    <Fragment>
      <div className="w-full px-5 md:w-auth">
        <h1 className="text-32xl font-bold text-center">Create an account</h1>
        <p className="text-gray-700 mt-3 text-sm lg:text-base text-center">
          Enter your phone number to continue
        </p>
        {errorMessage && (
          <ErrorAlert error={errorMessage} setError={setErrorMessage} />
        )}
        <form
          className="mt-10"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <FormInput
            className="py-3.5 px-5 mt-2"
            type="text"
            id="name"
            placeholder="Enter your Full Name"
            label="Full name"
            {...register('name', {
              required: 'You missed this field',
            })}
          />
          <FormInput
            className="py-3.5 px-5 mt-2"
            type="email"
            id="email"
            placeholder="Enter your Email Address"
            label="Email address"
            {...register('email', {
              required: 'You missed this field',
            })}
          />
          <FormInput
            className="py-3.5 px-5 mt-2"
            type="phone"
            id="phone"
            control={control}
            placeholder="070 3778 6423"
            label="Phone number"
            defaultValue={authPhone ? authPhone.phone.value : ''}
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
          <PinInput
            label="Enter Pin"
            placeholder="Enter 6 digit pin"
            pin={pin}
            setPin={setPin}
          />
          <FormInput
            className="py-3.5 px-5 mt-2"
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
        <div className="text-blue text-sm lg:text-base text-gray-500 mt-5">
          Already a user?{' '}
          <Link href="/auth/sign-in">
            <a className="text-primary-base font-bold">Login</a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
