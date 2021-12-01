import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import EmptyIcon from '../../public/svgs/empty-state.svg';

const ProviderSelectInput = ({
  className,
  error,
  label,
  options,
  selectedProvider,
  setSelectedProvider,
}) => {
  const errorStyles = error
    ? 'border-red-600 focus:border-red-600 focus:outline-none'
    : 'focus:bg-primary-light focus:border-primary-base focus:border-skin-theme focus:outline-none';
  const [openOption, setOpenOptions] = useState(false);

  useEffect(() => {
    if (options.length) {
      setSelectedProvider(options[0]);
    }
  }, [options]);

  return (
    <>
      <label className="text-gray-400 font-bold text-xs lg:text-sm label">
        {label}
      </label>
      <div className="mb-4 relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          onClick={() => setOpenOptions(!openOption)}
          aria-labelledby="listbox-label"
          className={`${className} ${errorStyles} form-input`}
        >
          {selectedProvider ? (
            <>
              <span className="flex items-center">
                <img
                  src={selectedProvider?.disco?.logo}
                  className="flex-shrink-0 h-8 w-8  rounded-full object-contain"
                />
                <span className="ml-3 block truncate">
                  {selectedProvider?.state?.name} (
                  {selectedProvider?.disco?.shortName})
                </span>
              </span>
              <span className="ml-3 mt-2 absolute inset-y-0 right-0 text-gray-500 flex items-center pr-3.5 pointer-events-none">
                <FontAwesomeIcon className="h-4 w-4" icon={faChevronDown} />
              </span>
            </>
          ) : (
            <>
              <span className="flex items-center">
                <span className="flex-shrink-0 h-8 w-8 bg-gray-300  rounded-full object-contain" />
                <span className="ml-3 block truncate">
                  Fetching Providers...
                </span>
                <span className="ml-3 mt-2 absolute inset-y-0 right-0 text-gray-500 flex items-center pr-3.5 pointer-events-none">
                  <FontAwesomeIcon className="h-4 w-4" icon={faChevronDown} />
                </span>
              </span>
            </>
          )}
        </button>
        <ul
          tabIndex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
          className={`${
            openOption ? 'opacity-100 visible' : 'opacity-0 invisible'
          } absolute z-10 mt-1 w-full bg-white shadow-lg max-h-64 rounded-lg py-2 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm transition ease-in duration-100`}
        >
          {!options.length && (
            <div className="flex flex-col items-center py-5">
              <EmptyIcon />
              <p className="text-gray-400 text-sm mt-2">No Providers Found</p>
              <p className="text-gray-700 text-xs">
                This may be due to your location
              </p>
            </div>
          )}
          {options.length &&
            options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedProvider(option);
                  setOpenOptions(false);
                }}
                className="text-gray-900 cursor-default hover:bg-primary-light hover:text-primary-base hover:font-semibold group select-none relative py-2 pl-5 pr-9 mx-2 rounded-lg"
                role="option"
              >
                <div className="flex items-center">
                  <img
                    src={option.disco.logo}
                    className="flex-shrink-0 h-8 w-8  rounded-full object-contain"
                  />
                  <span className="ml-3 block truncate">
                    {option.state.name}
                  </span>
                </div>
                <span className="text-primary-base  absolute inset-y-0 right-0 flex items-center pr-4">
                  {selectedProvider?.state?.name === option.state.name ? (
                    <FontAwesomeIcon className="h-4 w-4" icon={faCheck} />
                  ) : (
                    <span>{option.disco.shortName}</span>
                  )}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

ProviderSelectInput.defaultProps = {
  label: PropTypes.string,
  options: PropTypes.array,
};

export default ProviderSelectInput;
