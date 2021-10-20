import { formatPhoneNumber, parsePhoneNumber } from 'react-phone-number-input';

export const validate = e => {
  const re = /^[0-9\b]+$/;
  const value = e.target.value;
  if (value === '' || re.test(value)) {
    return true;
  }
};

export const formatPhoneNo = no => {
  const countryAbb = `${parsePhoneNumber(no).country}`;
  const countryCode = `+${parsePhoneNumber(no).countryCallingCode}`;
  const formattedNumber = formatPhoneNumber(no);
  const number = formattedNumber.replaceAll(' ', '');
  return { countryCode, countryAbb, formattedNumber, number };
};
