import React, { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../Buttons/PrimaryButton';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { generateTranscationToken } from '../../api';
import FormInput from '../forms/FormInput';

const QuickBuyConfirmDetails = ({
  setOpen,
  details,
  phone,
  setPhone,
  onPayStackSuccess,
}) => {
  const config = {
    reference: details?.reference,
    email: details?.account?.email?.value,
    amount: details?.gross * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUB_KEY,
  };
  const initializePayment = usePaystackPayment(config);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="pt-3 pb-6 border-b border-gray-100 px-8">
        <div className="text-center">
          <span className="text-sm text-gray-500 font-semibold">
            Your Meter
          </span>
          <div className=" text-2.5xl text-secondary-green font-bold">
            {details?.meter?.number}
          </div>
          <div className="mt-6">
            <div className="h-10 w-full px-4 text-xs rounded-xl mb-2 bg-primary-light flex justify-between items-center">
              <span className="font-semibold text-gray-500">
                Reference code
              </span>
              <span className="font-bold">{details?.reference}</span>
            </div>
            <div className="h-10 w-full px-4 text-xs rounded-xl mb-2 bg-primary-light flex justify-between items-center">
              <span className="font-semibold text-gray-500">
                Service charge
              </span>
              <span className="font-bold">
                {details?.country?.currency} {details?.charge.fee}
              </span>
            </div>
            <div className="h-10 w-full px-4 text-xs rounded-xl mb-2 bg-primary-light flex justify-between items-center">
              <span className="font-semibold text-gray-500">Amount</span>
              <span className="font-bold">
                {details?.country?.currency} {details?.amount}
              </span>
            </div>
            <div className="h-10 w-full px-4 text-xs rounded-xl bg-primary-light flex justify-between items-center border border-primary-dark">
              <span className="font-semibold text-primary-dark">Total</span>
              <span className="font-bold">
                {details?.country?.currency} {details?.gross}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 px-8">
        <FormInput
          className="py-2.5 px-5 mt-2"
          type="phone"
          id="phone"
          label="Phone number"
          font="small"
          value={phone}
          isValid={(value, country) => {
            if (value.match(/12345/)) {
              return 'Invalid value: ' + value + ', ' + country.name;
            } else if (value.match(/1234/)) {
              return false;
            } else {
              return true;
            }
          }}
          onChange={value => setPhone(value)}
        />
        <div className="text-xs -mt-1 text-primary-dark font-semibold">
          Token generated will be sent to this number
        </div>
        <div className="mt-10">
          <PrimaryButton
            disabled={isLoading}
            loading={isLoading}
            onClick={() => {
              setIsLoading(true);
              localStorage.setItem('authPhone', phone);
              initializePayment(onPayStackSuccess);
              setOpen(false);
            }}
            size="base"
          >
            Confirm details
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

QuickBuyConfirmDetails.propTypes = {};

export default QuickBuyConfirmDetails;
