import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { isValidPhoneNumber } from 'libphonenumber-js/min';

import { getProviders } from '../../../api';

import ProviderSelectInput from '../../forms/ProviderSelectInput';
import FormInput from '../../forms/FormInput';
import PrimaryButton from '../../Buttons/PrimaryButton';

const AddMeter = ({ activeTab, setStep }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [isValid, setIsValid] = useState(false);
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);

  useEffect(() => {
    fetchProviders();
  }, []);

  async function fetchProviders() {
    const res = await getProviders();
    if (res.data) {
      setProviders(res.data.docs);
    }
  }

  const ValidateMobileNo = number => {
    if (number) {
      isValidPhoneNumber(number) ? setIsValid(false) : setIsValid(true);
    }
  };

  function onSubmit(formData) {
    if (formData) {
      const { phone } = formData;
      const { countryCode, number } = formatPhoneNo(phone);
      const payload = {
        phone: {
          number,
          code: countryCode,
          value: phone,
        },
      };
    }
  }

  return (
    <div className="pt-6 px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProviderSelectInput
          className="mt-2"
          label="State of residence"
          options={providers}
          selectedProvider={selectedProvider}
          setSelectedProvider={setSelectedProvider}
        />
        <FormInput
          className="py-2.5 px-5 mt-2"
          type="number"
          id="meter"
          errors={errors}
          placeholder="Enter meter number"
          label="Meter number"
          {...register('meter', {
            required: true,
          })}
        />
        <FormInput
          className="py-2.5 px-5 mt-2"
          id="nick_name"
          errors={errors}
          placeholder="John Doe's Meter"
          label="Nickname meter (Optional)"
          {...register('nick_name', {
            required: true,
          })}
        />
        <FormInput
          className="py-2.5 px-5 mt-2"
          type="phone"
          id="phone"
          placeholder="070 3778 6423"
          label="Phone number"
          control={control}
          error={isValid}
          onChange={e => {
            ValidateMobileNo(e);
          }}
        />
        <div className="mt-10">
          <PrimaryButton size="base">Add Meter</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

AddMeter.propTypes = {};

export default AddMeter;
