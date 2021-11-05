import React from 'react';

const Tabs = ({ data }) => {
  return (
    <div className="flex justify-center lg:justify-start space-x-10 px-8 font-bold border-b">
      {data.map(({ name, active }) => {
        <>
          {active ? (
            <div className="text-sm lg:text-base text-primary-base border-b-2 border-base py-2 cursor-pointer">
              {name}
            </div>
          ) : (
            <div className="text-sm lg:text-base text-gray-400 py-2 cursor-pointer">
              {name}
            </div>
          )}
        </>;
      })}
    </div>
  );
};

export default Tabs;
