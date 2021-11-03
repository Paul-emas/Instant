import React from 'react';
import PropTypes from 'prop-types';

const SolarPaymentCard = props => {
  return (
    <div className="bg-white rounded-xl mt-8 py-5 flex flex-col justify-center px-10 h-44">
      <div className="pb-2 text-sm font-bold border-b flex justify-between items-center">
        <span className="text-secondary-label">Plan</span>
        <span className="text-secondary-green">Active</span>
      </div>
      <div className="pt-4 pb-2 text-sm font-bold border-b flex justify-between items-center">
        <span className="text-secondary-label">Last Payment</span>
        <span className="text-gray-800">04 Mar, 2021</span>
      </div>
      <div className="pt-4 pb-2 text-sm font-bold flex justify-between items-center">
        <span className="text-secondary-label">Next Payment</span>
        <span className="text-gray-800">04 Mar, 2021</span>
      </div>
    </div>
  );
};

SolarPaymentCard.propTypes = {};

export default SolarPaymentCard;
