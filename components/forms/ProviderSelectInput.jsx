import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setUserProviders, userSelector } from '../../slices/user';
import { getProviders } from '../../api';

import EmptyIcon from '../../public/svgs/empty-state.svg';

const ProviderSelectInput = ({
  className,
  error,
  label,
  selectedProvider,
  setSelectedProvider,
}) => {
  const dispatch = useDispatch();
  const { userProviders } = useSelector(userSelector);
  const errorStyles = error
    ? 'border-red-600 focus:border-red-600 focus:outline-none'
    : 'focus:bg-primary-light focus:border-primary-base focus:border-skin-theme focus:outline-none';
  const [openOption, setOpenOptions] = useState(false);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    if (!userProviders) {
      fetchProviders();
    } else {
      updateProvidersState(userProviders);
    }
  }, [userProviders]);

  async function fetchProviders() {
    const resp = await getProviders();
    if (resp.data) {
      dispatch(setUserProviders(resp.data));
      updateProvidersState(resp.data);
    }
  }

  function updateProvidersState(providers) {
    const { docs } = providers;
    setProviders(docs);
    setSelectedProvider(docs[0]);
  }

  return (
    <>
      <label className="text-gray-400 text-xs lg:text-sm label">{label}</label>
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
              <span className="flex items-center pl-1.5">
                <img
                  src={selectedProvider?.disco?.logo}
                  className="flex-shrink-0 h-7 w-8 rounded-full object-contain"
                />
                <span className="ml-3 block text-sm truncate">
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
              <span className="flex items-center pl-1.5">
                <span className="flex-shrink-0 h-7 w-8 bg-gray-200 rounded-lg object-contain" />
                <span className="ml-3 h-6 bg-gray-200 w-56 rounded-lg block truncate"></span>
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
          } absolute z-10 mt-1 w-full bg-white shadow-soft border border-primary-light max-h-64 rounded-b-lg py-2 text-base overflow-auto focus:outline-none sm:text-sm transition ease-in duration-100`}
        >
          {!providers?.length ? (
            <div className="flex flex-col items-center py-5">
              <EmptyIcon />
              <p className="text-gray-400 text-sm mt-2">No Providers Found</p>
              <p className="text-gray-700 text-xs">
                This is a network error try again?
              </p>
              <button
                onClick={() => {
                  fetchProviders();
                  setOpenOptions(false);
                }}
                className="bg-primary-base font-semibold text-white rounded-lg px-3 py-1 mt-2"
              >
                Retry
              </button>
            </div>
          ) : null}
          {providers?.length
            ? providers.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedProvider(option);
                    setOpenOptions(false);
                  }}
                  className="text-gray-900 hover:bg-primary-light  cursor-pointer group select-none relative py-3 pl-5 pr-9 mx-2 rounded-lg"
                  role="option"
                >
                  <div className="flex items-center">
                    <span className="block truncate text-sm font-semibold">
                      {option.state.name}
                    </span>
                  </div>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                    {selectedProvider?.state?.name === option.state.name ? (
                      <FontAwesomeIcon
                        className="h-5 w-5 text-secondary-green"
                        icon={faCheckCircle}
                      />
                    ) : (
                      <span className="font-bold text-xs">
                        {option.disco.shortName}
                      </span>
                    )}
                  </span>
                </li>
              ))
            : null}
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
