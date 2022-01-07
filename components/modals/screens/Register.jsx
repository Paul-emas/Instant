import { useEffect, useState } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  persistSelector,
  setIsLoggedIn,
  setQuickBuy,
  setToken,
} from '../../../slices/persist';
import { setUser } from '../../../slices/user';
import { signUp } from '../../../api';

import Modal from '../index';
import PrimaryButton from '../../Buttons/PrimaryButton';
import ErrorAlert from '../../forms/ErrorAlert';
import FormInput from '../../forms/FormInput';

const Register = ({ close, setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { userPhone } = useSelector(persistSelector);
  const [errorMessage, setErrorMessage] = useState(null);

  const [pin, setPin] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userPhone) {
      const { phone } = userPhone;
      setPhone(phone?.number);
    }
  }, [userPhone]);

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

      dispatch(setUserPhone(selectedNumber));

      if (error) {
        setIsLoading(false);
        setErrorMessage(error.data.errors[0].message);
        return;
      }

      if (data) {
        setIsLoading(false);
        const { account, authorization } = data;
        dispatch(setUser(account));
        dispatch(setToken(authorization));
        dispatch(setQuickBuy(false));
        dispatch(setIsLoggedIn(true));
        router.push('/dashboard');
      }
    }
  };

  return (
    <Modal border={false} close={close}>
      <div className="px-6 lg:px-8 -mt-4">
        <h1 className="text-2xl font-bold max-w-xs mx-auto text-center">
          Create an account
        </h1>
        <p className="text-gray-700 mt-3 text-sm text-center">
          Buy electricity units easily with Instant Energy
        </p>
        {errorMessage && (
          <ErrorAlert error={errorMessage} setError={setErrorMessage} />
        )}
        <form
          className="mt-5"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <FormInput
            className="py-2.5 px-5 mt-2"
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
            className="py-2.5 px-5 mt-2"
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
            className="py-2.5 px-4 mt-2"
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
          <FormInput
            className="py-2.5 px-5 mt-2"
            type="text"
            id="referral_no"
            placeholder="Referral Code"
            label="Referral code (Optional)"
            {...register('referral_no')}
          />
          <div className="mt-2 text-xs pr-10 text-gray-500">
            By creating an account with Instant Energy, you are agreeing to our{' '}
            <strong className="text-black">Privacy Policy</strong> and{' '}
            <strong className="text-black">Terms & Condition</strong>
          </div>
          <PrimaryButton
            size="base"
            className="mt-8"
            disabled={isLoading}
            loading={isLoading}
          >
            Create account
          </PrimaryButton>
        </form>
        <div className="text-blue text-sm text-gray-500 mt-3.5">
          Already a user?{' '}
          <span
            onClick={() => setStep('login')}
            className="text-primary-base font-semibold"
          >
            Login
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default Register;
