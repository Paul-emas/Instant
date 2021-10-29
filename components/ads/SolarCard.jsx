import React from 'react';

const SolarCard = () => {
  return (
    <div className="py-7 hidden lg:block px-1 bg-secondary-yellow mt-5 rounded-xl">
      <div className="container px-5">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold">Solar Electricity</h2>
            <p className="text-font-muted text-sm mt-0.5">
              Never have interrupted power supply, making life easy with work
              and business.
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="h-10 w-32 bg-black text-white rounded-md text-sm font-semibold">
              Request Solar
            </button>
            <button className="h-10 w-32 border-2 bg-secondary-yellow border-black text-black rounded-md text-sm font-semibold">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarCard;
