import { isValidPhoneNumber } from 'libphonenumber-js/min';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../Buttons/PrimaryButton';
import FormInput from './FormInput';

const PrepaidForm = ({}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [isValid, setIsValid] = useState(false);

  function onSubmit(data) {
    console.log(data);
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
      <FormInput
        className="py-3 2xl:py-3.5 px-5 mt-2"
        type="select"
        id="select"
        placeholder="Enter account number"
        label="State of residence"
        error={errors.select ?? false}
        options={['Lagos State', 'whats up']}
        {...register('select', {
          required: true,
        })}
      />
      <FormInput
        className="py-3 2xl:py-3.5 px-5 mt-2"
        type="number"
        id="account_no"
        errors={errors}
        placeholder="Enter account number"
        label="Account number"
        error={errors.account_no ?? false}
        {...register('account_no', {
          required: true,
        })}
      />
      <FormInput
        className="py-3 2xl:py-3.5 px-5 mt-2"
        type="phone"
        id="phone"
        errors={errors}
        placeholder="070 3778 6423"
        label="Phone number"
        control={control}
        error={isValid}
        onChange={e => {
          ValidateMobileNo(e);
        }}
      />
      <FormInput
        className="py-3 2xl:py-3.5 px-5 mt-2"
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
      <PrimaryButton>Proceed to Payment</PrimaryButton>
    </form>
  );
};

export default PrepaidForm;
