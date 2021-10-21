import { Fragment, useState } from 'react';
import router from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { createUserAuthPin } from '../../api';

import PrimaryButton from '../Buttons/PrimaryButton';
import { validate } from '../forms/utils';

const CreatePin = () => {
  let {
    auth: { anonymousToken },
  } = useGlobalContext();

  const [pin, setPin] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async formData => {
    console.log(pin);
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
          <div className="mb-2.5 2xl:mb-4">
            <label className="text-gray-400 font-bold text-sm label">
              Enter Pin
            </label>
            <input
              className="py-3.5 px-5 mt-2 form-input focus:border-skin-theme focus:outline-none"
              type="password"
              id="create_pin"
              value={pin}
              placeholder="Enter pin"
              maxLength="6"
              onChange={e => validate(e) && setPin(e.target.value)}
            />
          </div>
          <div className="mb-2.5 2xl:mb-4">
            <label className="text-gray-400 font-bold text-sm label">
              Confirm pin
            </label>
            <input
              className="py-3.5 px-5 mt-2 form-input focus:border-skin-theme focus:outline-none"
              type="password"
              id="confirm_pin"
              placeholder="Enter pin"
              maxLength="6"
              onChange={e =>
                pin !== e.target.value
                  ? setError('Pin doesnt Match')
                  : setError(null)
              }
            />
            {error && (
              <div className="mt-2 text-sm font-bold text-red-500 capitalize">
                {error}
              </div>
            )}
          </div>
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
