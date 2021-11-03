import React from 'react';
import PropTypes from 'prop-types';

const SolarAmountCard = props => {
  return (
    <div className="bg-white rounded-xl mt-10 h-44">
      <div className="pt-5 pb-6 border-b px-10">
        <div className="flex items-center">
          <span className="text-sm text-primary-darker font-semibold">
            Amount paid
          </span>
          <span className="text-white bg-secondary-purple px-2 flex items-center text-xs ml-1.5 rounded-lg font-semibold py-1">
            Premium plan
          </span>
        </div>
        <p className="text-gray-800 text-2xl font-gill font-bold mt-2">
          &#x20A6; 135,456.00
        </p>
      </div>
      <div className="px-10">
        <div className="w-full h-6 mt-4 rounded-lg overflow-hidden bg-secondary-lighterGreen">
          <div className="w-1/2 text-xs font-semibold rounded-r-lg flex justify-center items-center bg-secondary-green text-white h-full">
            48% owned
          </div>
        </div>
      </div>
    </div>
  );
};

SolarAmountCard.propTypes = {};

export default SolarAmountCard;