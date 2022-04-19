import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { persistSelector, setAnonymousToken, setUserPhone } from '../../../slices/persist';
import { setInitAuthentication } from '../../../slices/user';
import { checkUserValidation } from '../../../api';

import Modal from '../index';
import PrimaryButton from '../../Buttons/PrimaryButton';
import FormInput from '../../forms/FormInput';
import SocialCard from '../../SocialCard';

const Login = ({ close, setStep }) => {
  const dispatch = useDispatch();
  const { userPhone } = useSelector(persistSelector);
  const { handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    if (userPhone) {
      const { phone } = userPhone;
      setPhone(phone?.number);
    }
  }, [userPhone]);

  const onSubmit = async (formData) => {
    if (phone) {
      if (!navigator.onLine) {
        dispatch(setInitAuthentication('offline'));
        return;
      }

      setIsLoading(true);
      const formattedPhone = phone.replace(country.countryCode, '');
      const payload = {
        phone: {
          number: phone,
          code: country.countryCode,
          value: formattedPhone,
        },
      };

      dispatch(setUserPhone({ ...payload, country }));
      const { data, error } = await checkUserValidation(payload);

      if (error?.response?.status === 404) {
        setIsLoading(false);
        setStep('register');
      }

      if (data) {
        setIsLoading(false);
        const { isPin } = data;
        if (isPin) {
          setStep('signIn');
        } else {
          const { authorization } = data;
          dispatch(setAnonymousToken(authorization));
          setStep('createPin');
        }
      }
    }
  };

  return (
    <Modal border={false} close={close} isAuth>
      <div className="-mt-4 px-6 sm:px-10">
        <h1 className="mx-auto max-w-xs text-center text-2xl font-bold">Hey there, Welcome to Instant Energy</h1>
        <p className="mt-3 text-center text-sm text-gray-700">Enter your phone number to continue</p>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            className="mt-2 py-2 px-4"
            type="phone"
            id="phone"
            label="Phone number"
            value={phone}
            onChange={(value) => setPhone(value)}
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
          />
          <PrimaryButton className="mt-8" size="base" disabled={isLoading} loading={isLoading}>
            Continue
          </PrimaryButton>
        </form>
        <div className="text-blue mt-3.5 text-sm text-gray-500 lg:text-sm">
          Dont have an account?{' '}
          <span
            onClick={() => setStep('register')}
            className="cursor-pointer font-semibold text-primary-base hover:text-primary-hover"
          >
            Register
          </span>
        </div>
      </div>
      <div className="mt-10 border-t sm:pb-3">
        <SocialCard />
      </div>
    </Modal>
  );
};

export default Login;
