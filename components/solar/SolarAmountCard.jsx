import React from 'react';
import PropTypes from 'prop-types';

const SolarAmountCard = props => {
  return (
    <div className="bg-white rounded-xl mt-10 h-44">
      <div className="pt-5 pb-6 border-b px-6">
        <div className="flex items-center">
          <span className="text-sm text-primary-darker font-semibold">
            Amount paid
          </span>
          <span className="text-white bg-secondary-purple px-2 flex items-center text-xxs ml-1.5 rounded-md font-semibold py-0.5">
            Premium plan
          </span>
        </div>
        <p className="text-2xl font-bold mt-2.5">&#x20A6; 0.00</p>
      </div>
      <div className="px-6">
        <div className="w-full h-7 mt-4 rounded-lg overflow-hidden bg-secondary-lighterGreen">
          <div className="w-11/12 text-xs font-semibold rounded-r-lg flex justify-center items-center bg-secondary-green text-white h-full">
            0% owned
          </div>
        </div>
      </div>
    </div>
  );
};

SolarAmountCard.propTypes = {};

export default SolarAmountCard;
