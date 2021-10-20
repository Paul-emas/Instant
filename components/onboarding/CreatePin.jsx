import { Fragment, useEffect, useState } from 'react';
import router from 'next/router';
import Link from 'next/link';
import { useSessionStorage } from 'react-use';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { createUserAuthPin } from '../../api';

import FormInput from '../forms/FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';
import ErrorMessage from '../forms/ErrorMessage';
import { validate } from '../forms/utils';

const CreatePin = () => {
  let {
    auth: { anonymousToken },
  } = useGlobalContext();

  if (!authPhone) {
    authPhone = useSessionStorage('authPhone')[0];
  }

  useEffect(() => {
    authPhone === null && router.replace('/auth/sign-in');
  }, [authPhone]);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async formData => {
    if (formData && anonymousToken) {
      setIsLoading(true);
      const { pin } = formData;
      const { status, error } = await createUserAuthPin(
        { pin },
        anonymousToken,
      );

      if (error) {
        setIsLoading(false);
        toast(error.message);
      }

      console.log(status);

      if (status === 200) {
        setIsLoading(false);
        router.push('/auth/otp/pin');
      }
    }
  };

  return (
    <Fragment>
      <div className="w-full px-5 md:w-auth">
        <h1 className="text-32xl font-bold text-center">
          Create your login PIN
        </h1>
        <p className="text-gray-700 mt-3 text-sm lg:text-base text-center">
          Your 6-digit access code
        </p>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            className="py-3.5 px-5 mt-4"
            type="password"
            id="pin"
            value={pin}
            placeholder="Enter pin"
            label="Create pin"
            pattern="[0-9]{6}"
            maxLength="6"
            {...register('pin', {
              required: 'You missed this field',
              onChange: e => validate(e) && setPin(e.target.value),
            })}
          />
          <FormInput
            className="py-3.5 px-5 mt-4"
            type="password"
            id="confirm_pin"
            placeholder="Confirm your pin"
            label="Confirm pin"
            pattern="[0-9]{6}"
            maxLength="6"
            {...register('confirm_pin', {
              validate: value => value === watch('pin') || 'Pin dont match',
            })}
          >
            <ErrorMessage errors={errors} name="confirm_pin" />
          </FormInput>
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

export default CreatePin;
