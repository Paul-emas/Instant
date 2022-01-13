import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  persistSelector,
  setAnonymousToken,
  setUserPhone,
} from '../../../slices/persist';
import { setInitAuthentication } from '../../../slices/user';
import { checkUserValidation } from '../../../api';

import Modal from '../index';
import PrimaryButton from '../../Buttons/PrimaryButton';
import FormInput from '../../forms/FormInput';
import SocialCard from '../../SocialCard';

const Login = ({ close, setStep }) => {
  const dispatch = useDispatch();
  const { userPhone } = useSelector(persistSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    if (userPhone) {
      const { phone } = userPhone;
      setPhone(phone?.number);
    }
  }, [userPhone]);

  const onSubmit = async formData => {
    if (formData) {
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

      dispatch(setUserPhone(payload));
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
    <Modal border={false} close={close}>
      <div className="px-6 sm:px-10 -mt-4">
        <h1 className="text-2xl font-bold max-w-xs mx-auto text-center">
          Hey there, Welcome to Instant Energy
        </h1>
        <p className="text-gray-700 mt-3 text-sm text-center">
          Enter your phone number to continue
        </p>
        <form
          className="mt-10"
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <FormInput
            className="py-2 px-4 mt-2"
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
            size="base"
            onClick={onSubmit}
            disabled={isLoading}
            loading={isLoading}
          >
            Continue
          </PrimaryButton>
        </form>
        <div className="text-blue text-sm lg:text-sm text-gray-500 mt-3.5">
          Dont have an account?{' '}
          <span
            onClick={() => setStep('register')}
            className="text-primary-base font-semibold cursor-pointer hover:text-primary-hover"
          >
            Register
          </span>
        </div>
      </div>
      <div className="mt-10 sm:pb-3 border-t">
        <SocialCard />
      </div>
    </Modal>
  );
};

export default Login;
