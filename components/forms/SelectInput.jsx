import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SelectInput = ({
  className,
  error,
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
          {selectedOption && (
            <>
              <span className="text-left ml-1.5 block truncate">
                {selectedOption?.name}
              </span>
              <span
                className={`${
                  className && 'mt-2'
                } ml-3 absolute inset-y-0 right-0 text-gray-500 flex items-center pr-3.5 pointer-events-none`}
              >
                <FontAwesomeIcon className="h-4 w-4" icon={faChevronDown} />
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
          } absolute z-10 mt-1 w-full bg-white shadow-soft max-h-64 rounded-md py-2 text-base overflow-auto focus:outline-none sm:text-sm transition ease-in duration-100`}
        >
          {options.length > 0 &&
            options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedOption(option);
                  setOpenOptions(false);
                }}
                className="text-gray-900 cursor-default group select-none relative py-2 pl-3 pr-9 hover:bg-primary-light hover:text-primary-base rounded-lg mx-2"
                role="option"
              >
                <div className="flex items-center text-sm sm:text-base">
                  {option.name}
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
