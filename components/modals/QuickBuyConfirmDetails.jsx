import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../Buttons/PrimaryButton';

const QuickBuyConfirmDetails = ({ setStep }) => {
  return (
    <div>
      <div className="pt-3 pb-6 border-b border-gray-100 px-8">
        <div className="text-center font-bold">
          <span className="text-sm text-gray-400">Home</span>
          <div className="font-gill text-2.5xl">04172745368</div>
          <div className="mt-6">
            <div className="h-10 w-full px-4 text-xs rounded-xl mb-2 bg-primary-light flex justify-between items-center">
              <span className="font-semibold">Reference code</span>
              <span className="font-bold">5B3A427F</span>
            </div>
            <div className="h-10 w-full px-4 text-xs rounded-xl mb-2 bg-primary-light flex justify-between items-center">
              <span className="font-semibold">Service charge</span>
              <span className="font-bold">N 10,000</span>
            </div>
            <div className="h-10 w-full px-4 text-xs rounded-xl bg-primary-light flex justify-between items-center">
              <span className="font-semibold">Amount</span>
              <span className="font-bold">N 1000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 px-8">
        <span className="text-xs text-gray-400 font-semibold">
          Token generated will be sent to this number
        </span>
        <div className="flex items-end justify-between mt-5">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-secondary-green rounded-lg">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="w-3 h-3 mx-auto my-2.5 text-white"
              />
            </div>
            <div className="ml-3 h-8">
              <p className="text-xxs font-bold">Recipient phone</p>
              <p className="text-xs mt-0.5 text-primary-base font-semibold">
                +234 90 3337 6236
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => setStep(2)}
              className="bg-white h-8 text-sm font-semibold px-5 hover:bg-primary-hover hover:border-primary-hover hover:text-white rounded-lg border border-primary-dark text-primary-dark"
            >
              Change
            </button>
          </div>
        </div>
        <div className="mt-10">
          <PrimaryButton size="base">Confirm details</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

QuickBuyConfirmDetails.propTypes = {};

export default QuickBuyConfirmDetails;
