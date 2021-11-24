import { formatPhoneNumber, parsePhoneNumber } from 'react-phone-number-input';
import countries from '../../utils/countries.json';

export const validate = e => {
  const regex = new RegExp(/^[0-9]*\.?[0-9]*$/);
  const value = e.target.value;
  if (value === '' || regex.test(value)) {
    return true;
  }
};

export const formatPhoneNo = no => {
  const countryAbb = `${parsePhoneNumber(no).country}`;
  const countryCode = `+${parsePhoneNumber(no).countryCallingCode}`;
  const formattedNumber = formatPhoneNumber(no);
  const number = formattedNumber.replaceAll(' ', '');
  const country = countries.find(country => country.code === countryAbb);
  return { countryCode, countryAbb, country, formattedNumber, number };
};
