import { formatPhoneNumber, parsePhoneNumber } from 'react-phone-number-input';

export const validate = e => {
  // const regex = new RegExp(/^[0-9]*\.?[0-9]*$/);
  // const value = e.target.value;
  // if (regex.test(value)) {

  // }
  return true;
};

export const formatPhoneNo = no => {
  const countryAbb = `${parsePhoneNumber(no).country}`;
  const countryCode = `+${parsePhoneNumber(no).countryCallingCode}`;
  const formattedNumber = formatPhoneNumber(no);
  const number = formattedNumber.replaceAll(' ', '');
  return { countryCode, countryAbb, formattedNumber, number };
};
