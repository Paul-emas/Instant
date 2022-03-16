import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { userSelector } from '../../slices/user';
import { persistSelector } from '../../slices/persist';
import { createTranscationToken, getAccountToken } from '../../api';
import useFetchMeters from '../../hooks/useFetchMeters';
import PlusIcon from '../../public/svgs/plus-meter.svg';

import PrimaryButton from '../Buttons/PrimaryButton';
import FormInput from './FormInput';
import SelectInput from './SelectInput';
import ProviderSelectInput from './ProviderSelectInput';

const PrePaid = ({ setConfirmDetails, setStep, setPaymentToken, selectedMeter, setSelectedMeter }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { me } = useSelector(userSelector);
  const { isLoggedIn, userPhone } = useSelector(persistSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const { meters } = useFetchMeters();

  useEffect(() => {
    if (userPhone) {
      const { phone, country } = userPhone;
      setPhone(phone?.number);
      setCountry(country);
    }
  }, [userPhone]);

  async function onSubmit(formData) {
    if (formData) {
      setIsLoading(true);
      const { meter, email, amount } = formData;
      const formattedPhone = phone.replace(country?.countryCode, '');
      const payload = {
        phone: {
          number: phone,
          code: country?.countryCode,
          value: formattedPhone,
        },
        email: isLoggedIn && me ? me?.email.value : email,
        country: country?.name,
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
            code: country?.countryCode,
            value: formattedPhone,
          },
          provider: isLoggedIn ? selectedMeter?.meter?.provider?._id : selectedProvider?._id,
          meter: isLoggedIn ? selectedMeter?.meter?.number : meter,
          country: country?.name,
          amount: Number(amount),
        };
        const response = await createTranscationToken(payload, token);
        if (response?.error) {
          setIsLoading(false);
          console.log(response?.error);
          toast.error(response?.error?.data?.errors[0]?.message);
        } else {
          setIsLoading(false);
          setConfirmDetails(response?.data);
          setStep(1);
        }
      }
    }
  }

  return (
    <>
      <form className="px-6 pt-4 lg:px-8" onSubmit={handleSubmit(onSubmit)}>
        {isLoggedIn && (
          <>
            <div className="label my-2 text-xs text-gray-400">Select a meter</div>
            <SelectInput
              options={meters ?? []}
              selectedOption={selectedMeter}
              setSelectedOption={setSelectedMeter}
              meters
              className="py-2.5"
            />
            <div onClick={() => setStep(5)} className="mb-2 flex w-full cursor-pointer items-center border-b pb-2">
              <PlusIcon />
              <span className="ml-1.5 text-sm font-semibold text-primary-base">Add a new meter</span>
            </div>
          </>
        )}
        {!isLoggedIn && (
          <>
            <FormInput
              className="mt-2 py-2.5 px-5"
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
              className="mt-2 px-5"
              label="State of residence"
              placeholder="Enter account number"
              selectedProvider={selectedProvider}
              setSelectedProvider={setSelectedProvider}
            />
            <FormInput
              className="mt-2 py-2.5 px-5"
              type="text"
              id="name"
              placeholder="Enter your Full Name"
              label="Full name (Optional)"
              error={errors.name && true}
              {...register('name', {
                minLength: 3,
              })}
            />
            <FormInput
              className="mt-2 py-2.5 px-5"
              id="prepaid-email"
              errors={errors}
              placeholder="Enter email address"
              label="Email Address"
              error={errors.email ?? false}
              {...register('email', {
                required: true,
              })}
            />
          </>
        )}
        <FormInput
          className="mt-2 px-5"
          type="currency"
          id="amount"
          errors={errors}
          label="How much will you like to purchase?"
          error={errors.amount ?? false}
          {...register('amount', {
            required: true,
          })}
        />
        <div className="flex items-end">
          <p className="relative top-0.5 text-sm font-semibold text-gray-400">
            Estimated units: <span className="text-primary-base">32.5kw/h</span>
          </p>
          <span className="ml-3 h-5 w-5 rounded-full bg-blue-600 py-0.5 text-center text-xs font-bold text-white">
            ?
          </span>
        </div>
        <PrimaryButton size="base" loading={isLoading} className="mt-8">
          Proceed to Payment
        </PrimaryButton>
      </form>
    </>
  );
};

PrePaid.propTypes = {};

export default PrePaid;
