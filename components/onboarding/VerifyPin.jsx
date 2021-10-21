import { Fragment, useEffect, useState } from 'react';
import router from 'next/router';
import Link from 'next/link';
import { useSessionStorage } from 'react-use';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { logIn } from '../../api';
import { validate } from '../forms/utils';
import cookie from 'js-cookie';
import { toast } from 'react-toastify';

import useDispatcher from '../../hooks/useDispatcher';
import FormInput from '../forms/FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';

const VerifyPin = () => {
  let {
    auth: { authPhone },
  } = useGlobalContext();
  const { setUserAccount } = useDispatcher();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [pin, setPin] = useState('');

  if (!authPhone) {
    authPhone = useSessionStorage('authPhone')[0];
  }

  useEffect(() => {
    authPhone === null && router.replace('/auth/sign-in');
  }, [authPhone]);

  const onSubmit = async () => {
    if (pin && authPhone) {
      setIsLoading(true);
      const payload = {
        ...authPhone,
        pin: pin,
      };
      const { data, error } = await logIn(payload);
      if (error) {
        setIsLoading(false);
        toast.error(error.message);
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

  return (
    <Fragment>
      <div className="w-full px-5 md:w-auth">
        <h1 className="text-32xl font-bold text-center">Enter your PIN</h1>
        <p className="text-gray-700 mt-3 text-sm lg:text-base text-center">
          Your 6-digit access code
        </p>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            className="py-3.5 px-5 mt-4"
            type="password"
            id="pin"
            value={pin}
            defaultValue={pin}
            placeholder="Enter pin"
            label="Pin"
            maxLength="6"
            {...register('pin', {
              required: 'You missed this field',
              onChange: e => validate(e) && setPin(e.target.value),
            })}
          />
          <PrimaryButton disabled={isLoading} loading={isLoading}>
            Continue
          </PrimaryButton>
        </form>
        <div className="text-center mt-10">
          <Link href="/auth/otp/forgot">
            <a className="text-primary-base font-bold text-sm lg:text-base">
              Forgot Pin
            </a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default VerifyPin;
