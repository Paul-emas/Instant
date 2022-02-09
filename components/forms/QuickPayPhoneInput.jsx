import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserPhone,
  setQuickBuy,
  persistSelector,
  setAnonymousToken,
} from '../../slices/persist';
import { setInitAuthentication } from '../../slices/user';
import { checkUserValidation } from '../../api';

import FormInput from './FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';

const QuickPayPhoneInput = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userPhone } = useSelector(persistSelector);
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userPhone) {
      const { phone } = userPhone;
      setPhone(phone?.number);
    }
  }, [userPhone]);

  async function onSubmit(e) {
    e !== undefined && e.preventDefault();
    if (phone.length) {
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
      dispatch(setQuickBuy(true));

      const { data, error } = await checkUserValidation(payload);

      if (error?.response?.status === 404) {
        setIsLoading(false);
        router.push('/quickbuy');
      }

      if (data) {
        setIsLoading(false);
        const { isPin } = data;
        if (isPin) {
          isLoggedIn ? router.push('/dashboard') : dispatch(setInitAuthentication('signIn'));
        } else {
          const { authorization } = data;
          dispatch(setAnonymousToken(authorization));
          dispatch(setInitAuthentication('createPin'));
        }
      }
    }
  }

  return (
    <form className="px-6 pt-4 lg:px-8 2xl:px-8 2xl:pt-0" onSubmit={onSubmit}>
      <FormInput
        className="mt-2 py-2.5 px-5"
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
        onChange={(value) => setPhone(value)}
      />
      <PrimaryButton loading={isLoading} disabled={isLoading} className="mt-8 mb-7" type="large">
        Buy Electricity
      </PrimaryButton>
    </form>
  );
};

export default QuickPayPhoneInput;
