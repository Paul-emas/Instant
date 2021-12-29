import router from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import cookie from 'js-cookie';
import isEmail from 'is-email';
import useDispatcher from '../../hooks/useDispatcher';
import { signUp } from '../../api';

import FormInput from '../forms/FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';
import PinInput from '../forms/PinInput';
import ErrorAlert from '../forms/ErrorAlert';

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const { setUserAccount } = useDispatcher();

  const [pin, setPin] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const authPhone = localStorage.getItem('authPhone');
    if (authPhone) {
      setPhone(authPhone);
    }
  }, []);

  const onSubmit = async formData => {
    if (formData) {
      setIsLoading(true);
      const { name, email, referral_no } = formData;
      const formattedPhone = phone.replace(country.countryCode, '');
      const selectedNumber = {
        phone: {
          number: phone,
          code: country.countryCode,
          value: formattedPhone,
        },
      };

      const payload = {
        firstName: name,
        lastName: '',
        email,
        pin,
        country: country.name,
        ...selectedNumber,
        ...(referral_no !== '' && { referral_no }),
      };

      const { data, error } = await signUp(payload);

      if (error) {
        setIsLoading(false);
        setErrorMessage(error.data.errors[0].message);
        return;
      }

      localStorage.setItem('authPhone', phone);

      if (data) {
        setIsLoading(false);
        const { account, authorization } = data;
        setUserAccount({ user: { account } });
        cookie.set('token', authorization);
        router.push('/dashboard');
      }
    }
  };

  return (
    <Fragment>
      <div className="fadeIn w-full px-5 mx-auto py-20 md:w-auth">
        <h1 className="text-32xl font-bold text-center ">Create an account</h1>
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
            className="py-2.5 xl:py-2.5 2xl:py-3.5 px-5 mt-2"
            type="text"
            id="name"
            placeholder="Enter your Full Name"
            label="Full name"
            error={errors.name && true}
            {...register('name', {
              required: true,
              minLength: 3,
            })}
          />
          <FormInput
            className="py-2.5 xl:py-2.5 2xl:py-3.5 px-5 mt-2"
            type="email"
            id="email"
            placeholder="Enter your Email Address"
            label="Email address"
            error={errors.email && true}
            {...register('email', {
              required: true,
              validate: value => isEmail(value),
            })}
          />
          <FormInput
            className="py-2.5 xl:py-2.5 2xl:py-3.5 px-5 mt-2"
            type="phone"
            id="phone"
            label="Phone number"
            value={phone}
            isValid={(value, country) => {
              if (value.match(/12345/)) {
                return 'Invalid value: ' + value + ', ' + country.name;
              } else if (value.match(/1234/)) {
                return false;
              } else {
                setCountry(country);
                return true;
              }
            }}
            onChange={value => setPhone(value)}
          />
          <PinInput
            label="Enter Pin"
            placeholder="Enter 6 digit pin"
            pin={pin}
            setPin={setPin}
          />
          <FormInput
            className="py-2.5 xl:py-2.5 2xl:py-3.5 px-5 mt-2"
            type="text"
            id="referral_no"
            placeholder="Referral Code"
            label="Referral code (Optional)"
            {...register('referral_no')}
          />
          <PrimaryButton
            className="mt-8"
            disabled={isLoading}
            loading={isLoading}
          >
            Create account
          </PrimaryButton>
        </form>
        <div className="text-blue text-sm lg:text-base text-gray-500 mt-5">
          Already a user?{' '}
          <Link href="/sign-in">
            <a className="text-primary-base font-semibold">Login</a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
