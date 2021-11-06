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
        errors={errors}
        options={['Lagos State', 'whats up']}
        {...register('select', {
          required: 'You missed this field',
        })}
      />
      <FormInput
        className="py-3 2xl:py-3.5 px-5 mt-2"
        type="number"
        id="meter_no"
        errors={errors}
        placeholder="Enter meter number"
        label="Meter number"
        {...register('meter_no', {
          required: 'You missed this field',
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
        onChange={e => {
          ValidateMobileNo(e);
        }}
      >
        {isValid && (
          <div className="mt-2 text-sm font-bold text-red-500 capitalize">
            Enter a valid Phone Number
          </div>
        )}
      </FormInput>
      <FormInput
        className="py-3 2xl:py-3.5 px-5 mt-2"
        type="currency"
        id="amount"
        errors={errors}
        placeholder="Enter account number"
        label="How much will you like to purchase?"
        {...register('amount', {
          required: 'You missed this field',
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
