import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ id, name, ans }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div key={name} className="flex items-center justify-between mt-5">
        <h2 className="text-primary-darker text-sm lg:text-base font-bold">
          {name}
        </h2>
        <div className="w-2.5 h-2.5" onClick={() => setIsActive(!isActive)}>
          {isActive ? (
            <FontAwesomeIcon
              icon={faMinus}
              className="text-primary-darker cursor-pointer"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              className="text-primary-darker cursor-pointer"
            />
          )}
        </div>
      </div>
      <div
        className={`${
          isActive && 'pb-7'
        } pt-5 border-b duration-300 transition-all`}
      >
        <p
          className={`${
            isActive ? 'h-auto' : 'h-0'
          } w-11/12 overflow-x-hidden text-sm text-gray-500 lg:text-base`}
        >
          {ans}
        </p>
      </div>
    </div>
  );
};

Accordion.propTypes = {};

export default Accordion;
