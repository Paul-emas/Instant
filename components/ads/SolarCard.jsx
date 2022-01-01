import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const SolarCard = ({ className }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <div
          className={`${className} py-6 sm:py-4 px-1 bg-secondary-paleBlue mt-8 sm:mt-5 rounded-xl`}
        >
          <div className="container px-5">
            <div className="sm:flex items-center justify-between relative">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => setOpen(false)}
                className="w-4 h-4 right-1 absolute block sm:hidden"
              />
              <div>
                <h2 className="text-lg sm:text-2xl font-bold">
                  Solar Electricity
                </h2>
                <p className="text-font-muted pr-20 text-xs sm:text-sm mt-0.5 font-semibold">
                  Never have interrupted power supply, making life easy with
                  work and business.
                </p>
              </div>
              <button className="h-10 sm:h-11 px-5 bg-white hover:bg-gray-50 text-black rounded-lg text-xs sm:text-sm font-semibold uppercase mt-4 sm:mt-0">
                Request Solar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SolarCard;
