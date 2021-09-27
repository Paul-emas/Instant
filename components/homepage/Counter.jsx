import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <section className="py-24 bg-white">
    <div className="container mx-auto xl:px-10">
      <h1 className="text-5xl font-bold max-w-2xl text-center mx-auto font-gill text-primary-darker">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
      </h1>
      <div className="flex justify-center items-center space-x-10 mt-24">
        <div className="w-279 h-332 border border-primary-base flex flex-col justify-center items-center rounded-3xl text-center bg-primary-light">
          <p className="text-5xl font-gill font-medium text-primary-darker">
            3000
          </p>
          <span className="text-sm px-12 mt-4 text-font-dark">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </span>
        </div>
        <div className="w-279 h-332 bg-secondary-lighterGreen border border-secondary-green flex flex-col justify-center items-center rounded-3xl text-center">
          <p className="text-5xl font-gill font-medium text-primary-darker">
            460+
          </p>
          <span className="text-sm px-12 mt-4 text-font-dark">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </span>
        </div>
        <div className="w-279 h-332 bg-secondary-lighterPurple border border-secondary-purple flex flex-col justify-center items-center rounded-3xl text-center">
          <p className="text-5xl font-gill font-medium text-primary-darker">
            150k
          </p>
          <span className="text-sm px-12 mt-4 text-font-dark">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </span>
        </div>
      </div>
      <div className="text-center mt-24">
        <p className="text-primary-darker font-semibold">
          <span>Need help? talk to our</span>
          <a href="" className="ml-2 text-primary-base">
            Customer support
          </a>
        </p>
      </div>
    </div>
  </section>
);

Counter.propTypes = {};

export default Counter;
