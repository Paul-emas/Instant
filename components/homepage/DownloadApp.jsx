import Image from 'next/image';
import { useState } from 'react';

import BulbIcon from '../../public/svgs/bulb-dashed.svg';
import SunIcon from '../../public/svgs/sun.svg';
import DownloadButtons from '../DownloadButtons';

const DownloadApp = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="py-28 bg-primary-light">
      <div className="container px-10 mx-auto">
        <div className="flex max-w-6xl 2xl:max-w-4xl mx-auto">
          <div className="w-1/2">
            <div className="transform scale-110 2xl:scale-125 2xl:ml-6">
              <Image
                src="/images/mobile-mockup.png"
                width={311.64}
                height={626.17}
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold max-w-md font-gill text-primary-darker">
              Download our mobile app
            </h1>
            <div className="mt-12">
              <div className="flex">
                <div className="rounded-full w-16 h-16 flex justify-center items-center relative stepper">
                  <div
                    className={`${
                      active &&
                      'border-secondary-tealGreen border-dashed border-2 rounded-full w-full h-full absolute spin'
                    }`}></div>
                  <div className="w-12 h-12 bg-secondary-tealGreen rounded-full">
                    <BulbIcon className="mx-auto my-3" />
                  </div>
                </div>
                <div className="ml-6">
                  <p className="text-font-darker text-xl font-gill">
                    Buy Electricity
                  </p>
                  <p className="text-font-darker mt-2 max-w-xs">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed.
                  </p>
                </div>
              </div>
              <div className="flex mt-10">
                <div className="rounded-full w-16 h-16 flex justify-center items-center relative stepper">
                  <div
                    className={`${
                      active &&
                      'border-secondary-yellowLight border-dashed border-2 rounded-full w-full h-full absolute spin'
                    }`}></div>
                  <div className="w-12 h-12 bg-secondary-yellowLight rounded-full">
                    <SunIcon className="mx-auto my-3" />
                  </div>
                </div>
                <div className="ml-6">
                  <p className="text-gray-400 text-xl font-gill">
                    Manage solar Plan
                  </p>
                  <p className="text-gray-400 mt-2 max-w-xs">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed.
                  </p>
                </div>
              </div>
              <div className="flex mt-10">
                <div className="rounded-full w-16 h-16 flex justify-center items-center relative">
                  <div
                    className={`${
                      active &&
                      'border-secondary-blue border-dashed border-2 rounded-full w-full h-full absolute spin'
                    }`}></div>
                  <div className="w-12 h-12 bg-secondary-blue rounded-full">
                    <SunIcon className="mx-auto my-3" />
                  </div>
                </div>
                <div className="ml-6">
                  <p className="text-gray-400 text-xl font-gill">
                    Keep track of your Spending
                  </p>
                  <p className="text-gray-400 mt-2 max-w-xs">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed.
                  </p>
                </div>
              </div>
              <DownloadButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
