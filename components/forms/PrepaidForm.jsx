import { useState } from 'react';
import { isValidPhoneNumber } from 'libphonenumber-js/min';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { useGlobalContext } from '../../hooks/useGlobalContext';

import PrimaryButton from '../Buttons/PrimaryButton';
import FormInput from './FormInput';
import SelectInput from './SelectInput';
import { getAccountToken } from '../../api';
import { formatPhoneNo } from './utils';
import { toast } from 'react-toastify';

const PrePaid = ({ providers }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  let {
    auth: { authPhone },
  } = useGlobalContext();

  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  async function onSubmit(formData) {
    if (formData) {
      // setIsLoading(true);
      const { phone } = formData;
      const { countryCode, country, number } = formatPhoneNo(phone);
      console.log(country);
      const payload = {
        phone: {
          number,
          code: countryCode,
          value: phone,
        },
        country: country.name,
      };
      const { data, error } = await getAccountToken(payload);

      if (error) {
        toast.error(error.message);
      } else {
        const token = data?.authorization;
      }
    }
  }

  const ValidateMobileNo = number => {
    if (number) {
      isValidPhoneNumber(number) ? setIsValid(false) : setIsValid(true);
    }
  };

  return (
    <form
      className="px-6 lg:px-8 pt-4 pb-8 2xl:p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <SelectInput
        className="py-1.5 2xl:py-2.5 px-5 mt-2"
        label="State of residence"
        placeholder="Enter account number"
        error={errors.select ?? false}
        options={providers}
        selectedProvider={selectedProvider}
        setSelectedProvider={setSelectedProvider}
      />
      <FormInput
        className="py-2.5 2xl:py-3.5 px-5 mt-2"
        type="number"
        id="meter_no"
        errors={errors}
        placeholder="Enter account number"
        label="Account number"
        error={errors.meter_no ?? false}
        {...register('account_no', {
          required: true,
        })}
      />
      {authPhone && (
        <FormInput
          className="py-2.5 2xl:py-3.5 px-5 mt-2"
          type="phone"
          id="phone"
          errors={errors}
          placeholder="070 3778 6423"
          label="Phone number"
          defaultValue={authPhone?.phone?.value}
          control={control}
          error={isValid}
          onChange={e => {
            ValidateMobileNo(e);
          }}
        />
      )}
      <FormInput
        className="py-2.5 2xl:py-3.5 px-5 mt-2"
        type="currency"
        id="amount"
        errors={errors}
        placeholder="Enter account number"
        label="How much will you like to purchase?"
        error={errors.amount ?? false}
        {...register('amount', {
          required: true,
        })}
      />
      <div className="flex items-end">
        <p className="text-gray-400 font-semibold text-sm relative top-0.5">
          Estimated units: <span className="text-primary-base">32.5kw/h</span>
        </p>
        <span className="w-5 h-5 bg-blue-600 ml-3 rounded-full text-white py-0.5 text-center text-xs font-bold">
          ?
        </span>
      </div>
      <PrimaryButton disabled={isLoading} loading={isLoading} className="mt-8">
        Proceed to Payment
      </PrimaryButton>
    </form>
  );
};

PrePaid.propTypes = {
  providers: PropTypes.array,
};

export default PrePaid;
