import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setUserPhone, setQuickBuy, persistSelector, setAnonymousToken } from '../../slices/persist';
import { setInitAuthentication } from '../../slices/user';
import { checkUserValidation } from '../../api';
import { validateMobileNo } from '../../utils';

import FormInput from './FormInput';
import SecondaryButton from '../Button/SecondaryButton';

const QuickPayPhoneInput = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userPhone } = useSelector(persistSelector);
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isNoValid, setNoIsValid] = useState(true);

  useEffect(() => {
    if (userPhone) {
      const { phone } = userPhone;
      setPhone(phone?.number);
    }
  }, [userPhone]);

  async function onSubmit(e) {
    e !== undefined && e.preventDefault();
    if (isNoValid && phone?.length) {
      if (!navigator.onLine) {
        dispatch(setInitAuthentication('offline'));
        return;
      }

      setIsLoading(true);
      const formattedPhone = phone.replace(country.dialCode, '');
      const payload = {
        phone: {
          number: phone,
          code: country.dialCode,
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

  function validate(num, country) {
    const isValid = validateMobileNo(num);
    if (isValid) {
      setNoIsValid(true);
      setPhone(num);
      setCountry(country);
    } else {
      setNoIsValid(false);
      setPhone(num);
    }
  }

  return (
    <form className="px-5 pt-4 lg:px-8 2xl:px-8 2xl:pt-0" onSubmit={onSubmit}>
      <FormInput
        className="mt-2 py-2.5 px-5"
        type="phone"
        id="phone"
        label="Phone number"
        value={phone}
        error={!isNoValid}
        onChange={(num, country) => validate(num, country)}
      />
      <SecondaryButton loading={isLoading} className="mt-8 mb-7" type="large">
        Buy Electricity
      </SecondaryButton>
    </form>
  );
};

export default QuickPayPhoneInput;
