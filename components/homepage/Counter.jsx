import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <section className="py-24 -mt-40">
    <div className="container mx-auto xl:px-10">
      <div className="flex justify-between items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl leading-tight text-font-darker">
            Be comfortable as you move around the city anytime, anyday.
          </h1>
          <p className="text-font-dark mt-3">
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.
            Move around at your will in convivence go about your day at ease.{' '}
          </p>
        </div>
        <div className="p-5 w-w-modal bg-gradient-to-r from-primary-lighter to-primary-base rounded-lg">
          <div className="flex justify-between">
            <div className="w-52 h-52 bg-white rounded-lg text-center flex justify-center items-center">
              <div>
                <h2 className="text-6xl text-font-green font-bold">460+</h2>
                <p className="text-font-dark mt-3">Countries of operation</p>
              </div>
            </div>
            <div className="w-52 h-52 bg-white rounded-lg text-center flex justify-center items-center">
              <div>
                <h2 className="text-6xl text-font-green font-bold">20+</h2>
                <p className="text-font-dark mt-3">Countries of operation</p>
              </div>
            </div>
          </div>
          <div className="flex mt-5 justify-between">
            <div className="w-52 h-52 bg-white rounded-lg text-center flex justify-center items-center">
              <div>
                <h2 className="text-6xl text-font-green font-bold">100k</h2>
                <p className="text-font-dark mt-3">Countries of operation</p>
              </div>
            </div>
            <div className="w-52 h-52 bg-white rounded-lg text-center flex justify-center items-center">
              <div>
                <h2 className="text-6xl text-font-green font-bold">50+</h2>
                <p className="text-font-dark mt-3">Countries of operation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Counter.propTypes = {};

export default Counter;
