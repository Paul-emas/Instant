import { Fragment, useEffect, useState } from 'react';
import router from 'next/router';
import Link from 'next/link';
import useDispatcher from '../../hooks/useDispatcher';
import { checkUserValidation } from '../../api';

import FormInput from '../forms/FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';
import SocialCard from '../SocialCard';

const Login = () => {
  const { setUserPhoneNo, setUserAnonymousToken } = useDispatcher();
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const authPhone = localStorage.getItem('authPhone');
    if (authPhone) {
      setPhone(authPhone);
    }
  }, []);

  const onSubmit = async formData => {
    if (formData) {
      setIsLoading(true);
      const formattedPhone = phone.replace(country.countryCode, '');
      const payload = {
        phone: {
          number: phone,
          code: country.countryCode,
          value: formattedPhone,
        },
      };
      const { data, error } = await checkUserValidation(payload);
      if (error) {
        setIsLoading(false);
        setUserPhoneNo({ authPhone: payload });
        router.push('/sign-up');
      }
      localStorage.setItem('authPhone', phone);
      if (data) {
        setIsLoading(false);
        const { isPin } = data;
        if (isPin) {
          setUserPhoneNo({ authPhone: payload });
          router.push('/auth/otp/pin');
        } else {
          const { authorization } = data;
          setUserAnonymousToken({ anonymousToken: authorization });
          router.push('/auth/otp/create');
        }
      }
    }
  };

  return (
    <Fragment>
      <div className="fadeIn w-full mx-auto xl:pt-28 2xl:pt-44 md:max-w-lg px-5 md:w-auth">
        <h1 className="text-32xl font-bold text-center ">
          Welcome to Instant Energy
        </h1>
        <p className="text-gray-700 mt-3 text-sm lg:text-base text-center">
          Sign in to Instant Energy
        </p>
        <form
          className="mt-10"
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <FormInput
            className="py-2.5 2xl:py-3.5 px-5 mt-2"
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
          <PrimaryButton
            className="mt-8"
            onClick={onSubmit}
            disabled={isLoading}
            loading={isLoading}
          >
            Continue
          </PrimaryButton>
        </form>
        <div className="text-blue text-sm lg:text-base text-gray-500 mt-5">
          Dont have an account?{' '}
          <Link href="/sign-up">
            <a className="text-primary-base font-semibold">Register</a>
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
