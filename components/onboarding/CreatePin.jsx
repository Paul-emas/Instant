import { Fragment, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import FormInput from '../forms/FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';
import ErrorMessage from '../forms/ErrorMessage';

const CreatePin = () => {
  const {
    register,
    watch,
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
        <h1 className="text-32xl font-bold text-center">Enter your PIN</h1>
        <p className="text-gray-700 mt-3 text-center">
          Your 4-digit access code
        </p>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            className="py-3.5 px-5 mt-4"
            type="password"
            id="pin"
            placeholder="Enter pin"
            label="Create pin"
            pattern="[0-9]{4}"
            maxlength="4"
            {...register('pin', {
              required: 'You missed this field',
            })}
          />
          <FormInput
            className="py-3.5 px-5 mt-4"
            type="password"
            id="confirm_pin"
            placeholder="Confirm your pin"
            label="Confirm pin"
            pattern="[0-9]{4}"
            maxlength="4"
            {...register('confirm_pin', {
              validate: value => value === watch('pin') || 'Invalid pin',
            })}
          >
            <ErrorMessage errors={errors} name="confirm_pin" />
          </FormInput>
          <PrimaryButton disabled={isLoading} loading={isLoading}>
            Continue
          </PrimaryButton>
        </form>
        <div className="text-center mt-10">
          <Link href="/auth/forgot">
            <a className="text-primary-base font-bold">Forgot Pin</a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default CreatePin;
