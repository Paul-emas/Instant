import React from 'react';
import { useForm } from 'react-hook-form';

import FormInput from '../forms/FormInput';

const QuickPay = props => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="bg-white w-w-modal 2xl:h-h-modal 2xl:w-9/12 ml-auto mt-20 2xl:mt-36 shadow-soft rounded-3xl">
      <div className="pt-8">
        <div>
          <h2 className="text-2xl px-8 mb-4 text-black font-bold">
            Buy Electricity
          </h2>
          <div className="flex space-x-10 px-8 font-bold border-b">
            <div className="text-gray-400 py-2 cursor-pointer">Prepaid</div>
            <div className="text-primary-base border-b-2 border-base py-2 cursor-pointer">
              Postpaid
            </div>
            <div className="text-gray-400 py-2 cursor-pointer">Off grid</div>
          </div>
        </div>
        <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            className="py-3.5 px-5 mt-2"
            type="select"
            id="select"
            placeholder="Enter account number"
            label="State of residence"
            options={['Lagos State', 'whats up']}
            {...register('select', {
              required: 'You missed this field',
            })}
          />
          <FormInput
            className="py-3.5 px-5 mt-2"
            type="number"
            id="account_no"
            placeholder="Enter account number"
            label="Account number"
            {...register('account_no', {
              required: 'You missed this field',
            })}
          />
          <FormInput
            className="py-3.5 px-5 mt-2"
            type="phone"
            id="phone"
            placeholder="070 3778 6423"
            label="Phone number"
            control={control}
          />
          <FormInput
            className="py-3.5 px-5 mt-2"
            type="currency"
            id="amount"
            placeholder="Enter account number"
            label="How much will you like to purchase?"
            {...register('amount', {
              required: 'You missed this field',
            })}
          />
          <div className="flex items-end">
            <p className="text-gray-400 font-semibold text-sm relative top-0.5">
              Estimated units:{' '}
              <span className="text-primary-base">32.5kw/h</span>
            </p>
            <span className="w-5 h-5 bg-blue-600 ml-3 rounded-full text-white py-0.5 text-center text-xs font-bold">
              ?
            </span>
          </div>
          <button
            type="submit"
            className="btn transform active:translate-y-0 hover:-translate-y-1">
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

QuickPay.propTypes = {};

export default QuickPay;
