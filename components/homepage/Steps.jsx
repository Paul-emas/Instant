import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Steps = () => {
  return (
    <div className="bg-primary-light py-20 lg:pt-36 lg:pb-40">
      <div className="container mx-auto px-4 sm:px-5 xl:px-14">
        <h1 className="mx-auto px-10 text-center text-xl font-bold text-primary-dark sm:px-0 lg:max-w-4xl lg:text-5xl xl:leading-tight">
          Service that is a step ahead
        </h1>
        <div className="mx-auto mt-8 max-w-4xl lg:mt-20">
          <div className="grid-cols-2 gap-y-10 gap-x-20 space-y-8 lg:grid lg:space-y-0">
            <div className="rounded-2xl bg-white p-8 text-center">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="mx-auto h-5 w-5 text-xl text-primary-base"
              />
              <div className="mt-3 text-lg font-bold lg:text-xl">
                Track your electricity spending
              </div>
              <p className="mt-2 text-xs text-gray-400 lg:text-sm">
                Use your in-app dashboard to track your electricity spending, manage all your bills
                in one place and set reminders for future transactions.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 text-center">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="mx-auto h-5 w-5 text-xl text-primary-base"
              />
              <div className="mt-3 text-lg font-bold lg:text-xl">Top-up on the go</div>
              <p className="mt-2 text-xs text-gray-400 lg:text-sm">
                Recharge your meter from anywhere, either online or using the app, with an agent or
                from the comfort of your home.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 text-center">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="mx-auto h-5 w-5 text-xl text-primary-base"
              />
              <div className="mt-3 text-lg font-bold lg:text-xl">Energy Budgeting</div>
              <p className="mt-2 text-xs text-gray-400 lg:text-sm">
                Use your in-app instant energy wallet to set aside money for your next electricity
                payment.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 text-center">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="mx-auto h-5 w-5 text-xl text-primary-base"
              />
              <div className="mt-3 text-lg font-bold lg:text-xl">Nickname Meter</div>
              <p className="mt-2 text-xs text-gray-400 lg:text-sm">
                Buying electricity for family &friends or do you live in a multi-tenant building?
                You can now give a unique name to every new meter you add on the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
