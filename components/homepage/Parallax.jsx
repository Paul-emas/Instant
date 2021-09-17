import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Parallax = ({ type }) => (
  <section className="bg-white">
    <div
      className={`${type} py-56 2xl:py-64  bg-no-repeat bg-center bg-cover bg-blue-600`}></div>
    <div className="container mx-auto lg:px-10">
      <div
        className={`${
          type !== 'woman' ? 'float-right 2xl:right-24' : '2xl:left-24'
        } bg-primary-light shadow-soft py-16 px-8 w-w-modal relative -top-44 rounded-2xl`}>
        <div className="flex space-x-1">
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          <FontAwesomeIcon icon={faStar} className="text-gray-200" />
          <FontAwesomeIcon icon={faStar} className="text-gray-200" />
        </div>
        <h2 className="text-xl mt-4 font-bold text-font-darker">
          Awesome rates
        </h2>
        <p className="text-font-dark mt-2">
          Instant Energy deploys patient, value accretive capital alongside
          international and local value investors to create. Instant Energy
          deploys patient, value accretive capital alongside international and
          local value investors to create.
        </p>
        <p className="text-font-dark mt-4">Paul Emas</p>
      </div>
    </div>
  </section>
);

Parallax.defaultProps = {
  type: 'woman',
};

Parallax.propTypes = {
  type: PropTypes.string,
};

export default Parallax;
