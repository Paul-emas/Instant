import Image from 'next/image';
import { useState } from 'react';

import BulbIcon from '../../public/svgs/bulb-dashed.svg';
import SunIcon from '../../public/svgs/sun.svg';
import DownloadButtons from '../DownloadButtons';

const DownloadApp = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="py-16 lg:py-28 bg-primary-light">
      <div className="container px-10 mx-auto">
        <div className="lg:flex max-w-4xl mx-auto">
          <div className="lg:w-1/2">
            <div className="flex justify-center lg:block transform lg:scale-125 2xl:ml-6">
              <Image
                src="/images/mobile-mockup.webp"
                width={311.64}
                height={626.17}
                className="object-cover"
                priority={true}
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold max-w-md font-gill hidden lg:block text-primary-darker">
              Download our mobile app
            </h1>
            <div className="mt-12 md:max-w-sm lg:max-w-full mx-auto">
              <div className="flex">
                <div className="rounded-full w-16 h-16 flex justify-center items-center relative stepper">
                  <div
                    className={`${
                      active &&
                      'border-secondary-tealGreen border-dashed border-2 rounded-full w-16 h-16 absolute spin'
                    }`}
                  ></div>
                  <div className="w-12 h-12 bg-secondary-tealGreen rounded-full">
                    <BulbIcon className="mx-auto my-3" />
                  </div>
                </div>
                <div className="ml-6">
                  <p className="text-font-darker lg:text-xl font-gill font-semibold">
                    Buy Electricity
                  </p>
                  <p className="text-font-darker mt-2 text-xs lg:text-base max-w-xs">
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
                      'border-secondary-yellowLight border-dashed border-2 rounded-full w-16 h-16 absolute spin'
                    }`}
                  ></div>
                  <div className="w-12 h-12 bg-secondary-yellowLight rounded-full">
                    <SunIcon className="mx-auto my-3" />
                  </div>
                </div>
                <div className="ml-6">
                  <p className="text-gray-400 lg:text-xl font-gill font-semibold">
                    Manage solar Plan
                  </p>
                  <p className="text-gray-400 mt-2 text-xs lg:text-base max-w-xs">
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
                      'border-secondary-blue border-dashed border-2 rounded-full w-16 h-16 absolute spin'
                    }`}
                  ></div>
                  <div className="w-12 h-12 bg-secondary-blue rounded-full">
                    <SunIcon className="mx-auto my-3" />
                  </div>
                </div>
                <div className="ml-6">
                  <p className="text-gray-400 lg:text-xl font-gill font-semibold">
                    Keep track of your Spending
                  </p>
                  <p className="text-gray-400 mt-2 text-xs lg:text-base max-w-xs">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed.
                  </p>
                </div>
              </div>
              <DownloadButtons className="bg-primary-darker hover:bg-primary-darkest" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
