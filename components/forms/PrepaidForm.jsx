import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import PrimaryButton from '../Buttons/PrimaryButton';
import FormInput from './FormInput';
import ProviderSelectInput from './ProviderSelectInput';
import { createTranscationToken, getAccountToken } from '../../api';
import { toast } from 'react-toastify';

const PrePaid = ({
  email,
  providers,
  setConfirmDetails,
  setStep,
  setOpenModal,
  setPaymentToken,
  fetchProviders,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const authPhone = localStorage.getItem('authPhone');
    if (authPhone) {
      setPhone(authPhone);
    }
  }, []);

  async function onSubmit(formData) {
    if (formData) {
      setIsLoading(true);
      const { meter, amount } = formData;
      const formattedPhone = phone.replace(country.countryCode, '');
      const payload = {
        phone: {
          number: phone,
          code: country.countryCode,
          value: formattedPhone,
        },
        email,
        country: country.name,
      };
      const resp = await getAccountToken(payload);
      if (resp?.error) {
        setIsLoading(false);
        toast.error(resp?.error?.message);
      } else {
        const token = resp?.data?.authorization;
        setPaymentToken(token);
        const payload = {
          recipient: {
            number: phone,
            code: country.countryCode,
            value: formattedPhone,
          },
          provider: selectedProvider._id,
          meter,
          country: country.name,
          amount: Number(amount),
        };
        const response = await createTranscationToken(payload, token);
        if (response?.error) {
          setIsLoading(false);
        } else {
          setSelectedProvider(providers[0]);
          toast.error(response?.error?.message);
          setIsLoading(false);
          setConfirmDetails(response?.data);
          setStep(1);
          setOpenModal(true);
        }
        localStorage.setItem('authPhone', phone);
      }
    }
  }

  return (
    <>
      <form className="px-6 lg:px-8 pt-4" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          className="py-2.5 px-5 mt-2"
          type="number"
          id="meter"
          errors={errors}
          placeholder="Enter meter number"
          label="Meter number"
          error={errors.meter_no ?? false}
          {...register('meter', {
            required: true,
          })}
        />
        <ProviderSelectInput
          className="px-5 mt-2"
          label="State of residence"
          placeholder="Enter account number"
          error={errors.select ?? false}
          options={providers}
          retry={fetchProviders}
          selectedProvider={selectedProvider}
          setSelectedProvider={setSelectedProvider}
        />
        <FormInput
          className="py-2.5 px-5 mt-2"
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
          className="py-2.5 px-5 mt-2"
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
        <PrimaryButton
          size="base"
          disabled={isLoading}
          loading={isLoading}
          className="mt-8"
        >
          Proceed to Payment
        </PrimaryButton>
      </form>
    </>
  );
};

PrePaid.propTypes = {
  providers: PropTypes.array,
};

export default PrePaid;
