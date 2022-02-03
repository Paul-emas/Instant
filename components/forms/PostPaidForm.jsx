import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { persistSelector, setUserPhone } from '../../slices/persist';
import { createTranscationToken, getAccountToken } from '../../api';

import ProviderSelectInput from './ProviderSelectInput';
import FormInput from './FormInput';
import PrimaryButton from '../Buttons/PrimaryButton';

const PostPaid = ({
  email,
  setConfirmDetails,
  setStep,
  setOpenModal,
  setPaymentToken,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { userPhone } = useSelector(persistSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    if (userPhone) {
      const { phone } = userPhone;
      setPhone(phone?.number);
    }
  }, [userPhone]);

  async function onSubmit(formData) {
    if (formData) {
      setIsLoading(true);
      const { meter, email, amount } = formData;
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
          toast.error(response?.error?.message);
          setIsLoading(false);
          setConfirmDetails(response?.data);
          setStep(1);
          setOpenModal(true);
        }

        dispatch(
          setUserPhone({
            phone: {
              number: phone,
              code: country.countryCode,
              value: formattedPhone,
            },
          }),
        );
      }
    }
  }

  return (
    <>
      <form className="px-6 pt-4 lg:px-8" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          className="mt-2 py-2.5 px-5"
          type="number"
          id="meter"
          errors={errors}
          placeholder="Enter account number"
          label="Account number"
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
          label="Full name"
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
        <FormInput
          className="mt-2 py-2.5 px-5"
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
          <p className="relative top-0.5 text-sm font-semibold text-gray-400">
            Estimated units: <span className="text-primary-base">32.5kw/h</span>
          </p>
          <span className="ml-3 h-5 w-5 rounded-full bg-blue-600 py-0.5 text-center text-xs font-bold text-white">
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

PostPaid.propTypes = {};

export default PostPaid;
