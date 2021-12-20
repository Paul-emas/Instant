import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import BuyElectricityTab from '../../tabs/BuyElectricityTab';
import SelectInput from '../../forms/SelectInput';
import FormInput from '../../forms/FormInput';
import PrimaryButton from '../../Buttons/PrimaryButton';
import ProviderSelectInput from '../../forms/ProviderSelectInput';
import { useGlobalContext } from '../../../hooks/useGlobalContext';

const DashboardBuyElectricity = ({
  email,
  providers,
  setConfirmDetails,
  setStep,
  setOpenModal,
  setPaymentToken,
}) => {
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
      console.log(formData);
    }
  }

  return (
    <div className="pt-6 px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProviderSelectInput
          className="px-5 mt-2"
          label="State of residence"
          placeholder="Enter account number"
          error={errors.select ?? false}
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
          error={errors.meter_no ?? false}
          {...register('meter', {
            required: true,
          })}
        />
        {authPhone && (
          <FormInput
            className="py-2.5 px-5 mt-2"
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
        <div className="flex items-center -mt-1">
          <p className="text-gray-400 font-semibold text-xs relative">
            Estimated units: <span className="text-primary-base">32.5kw/h</span>
          </p>
          <span className="w-5 h-5 transform scale-75 bg-blue-600 ml-2 rounded-full text-white py-0.5 text-center text-xs font-bold">
            ?
          </span>
        </div>
        <div className="mt-10">
          <PrimaryButton
            disabled={isLoading}
            loading={isLoading}
            className="mt-8"
          >
            Proceed to Payment
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default DashboardBuyElectricity;
