import { useEffect, useState } from 'react';
import router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import isEmail from 'is-email';
import {
  setUserPhone,
  setUserEmail,
  setQuickBuy,
  persistSelector,
} from '../../slices/persist';

import FormInput from './FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';

const QuickPayPhoneInput = () => {
  const dispatch = useDispatch();
  const { userPhone } = useSelector(persistSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    if (userPhone) {
      const { phone } = userPhone;
      setPhone(phone?.number);
    }
  }, [userPhone]);

  const onSubmit = async formData => {
    if (formData && phone.length) {
      const { email } = formData;
      const formattedPhone = phone.replace(country.countryCode, '');
      const payload = {
        phone: {
          number: phone,
          code: country.countryCode,
          value: formattedPhone,
        },
      };
      dispatch(setUserPhone(payload));
      dispatch(setUserEmail(email));
      dispatch(setQuickBuy(true));
      router.push('/dashboard');
    }
  };

  return (
    <form
      className="px-6 lg:px-8 pt-4 2xl:px-8 2xl:pt-0"
      onSubmit={handleSubmit(onSubmit)}
    >
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
      <PrimaryButton className="mt-8 mb-7" type="large">
        Buy Electricity
      </PrimaryButton>
    </form>
  );
};

export default QuickPayPhoneInput;
