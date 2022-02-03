import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

const SelectInput = ({
  className,
  error,
  meters,
  label,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const errorStyles = error
    ? 'border-red-600 focus:border-red-600 focus:outline-none'
    : 'focus:bg-primary-light focus:border-primary-base focus:border-skin-theme focus:outline-none';
  const [openOption, setOpenOptions] = useState(false);

  useEffect(() => {
    if (options.length && !selectedOption) {
      setSelectedOption(options[0]);
    }
  }, [options]);

  return (
    <>
      <label className="label text-xs font-bold text-gray-400 lg:text-sm">
        {label}
      </label>
      <div className="relative mb-4">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          onClick={() => setOpenOptions(!openOption)}
          aria-labelledby="listbox-label"
          className={`${className} ${errorStyles} form-input`}
        >
          {selectedOption ? (
            <>
              {!meters ? (
                <span className="ml-1.5 block truncate text-left">
                  {selectedOption?.name}
                </span>
              ) : (
                <span className="ml-1.5 block truncate text-left">
                  {selectedOption?.meter?.number}
                </span>
              )}
              <span
                className={`${
                  className && ''
                } pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-3.5 text-gray-500`}
              >
                <FontAwesomeIcon className="h-4 w-4" icon={faChevronDown} />
              </span>
            </>
          ) : (
            <div className="h-4 w-2/3 rounded-md bg-gray-200"></div>
          )}
        </button>
        <ul
          tabIndex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
          className={`${
            openOption ? 'visible opacity-100' : 'invisible opacity-0'
          } shadow-soft absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-md bg-white py-2 text-base transition duration-100 ease-in focus:outline-none sm:text-sm`}
        >
          {options?.length > 0 &&
            options?.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedOption(option);
                  setOpenOptions(false);
                }}
                className="group relative mx-2 cursor-pointer select-none rounded-lg py-2 pl-3 pr-9 text-gray-900 hover:bg-primary-light hover:text-primary-base"
                role="option"
              >
                {/* <div className="flex items-center text-sm sm:text-base">
                  {meters ? option?.meter?.number : option.name}
                </div> */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold">
                      {option?.meter?.name}
                    </div>
                    <div className="text-xxs font-bold text-primary-base">
                      {option?.meter?.number}
                    </div>
                    <div className="text-xxs text-gray-500">
                      {option?.meter?.address}
                    </div>
                  </div>
                  {selectedOption?.meter?._id === option?.meter?._id && (
                    <FontAwesomeIcon
                      className="-mr-5 h-6 w-6 scale-150 transform text-secondary-green"
                      icon={faCheckCircle}
                    />
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

SelectInput.defaultProps = {
  label: PropTypes.string,
  options: PropTypes.array,
};

export default SelectInput;
