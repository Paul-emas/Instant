import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCopy,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import Flickity from 'react-flickity-component';

import ReferIcon from '../../public/svgs/refer.svg';

const Detailbar = props => {
  const flickityOptions = {
    draggable: false,
    initialIndex: 0,
    // autoPlay: 1500,
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: true,
    pageDots: true,
  };

  const next = () => {
    // flkty.next();
    // console.log(Flickity.data('.main-carousel'));
  };

  return (
    <aside className="w-detailbar">
      <div className="min-h-screen border-l bg-white">
        <div className="pt-10">
          <div className="h-20">
            <div className="flex items-center justify-between px-5 outline-black">
              <div className="flex items-center">
                <Image
                  src="/images/profile.jpg"
                  width={56}
                  height={56}
                  className="object-cover rounded-full"
                />
                <div className="ml-5">
                  <p className="text-sm font-bold text-font-darker relative">
                    Paul Emas
                  </p>
                  <p className="text-xs font-bold text-primary-base">
                    +234 07 5942 1153
                  </p>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faEllipsisH}
                className="text-xl text-font-muted cursor-pointer"
              />
            </div>
          </div>
          <div className="py-7 border-t border-b px-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-font-darker">
                Refer and Earn
              </h2>
              <div>
                <p className="text-sm text-font-muted">
                  <span>Leo4245567</span>
                  <FontAwesomeIcon
                    icon={faCopy}
                    className="text-xs ml-1 relative -top-0.5 text-font-muted cursor-pointer"
                  />
                </p>
              </div>
            </div>
            <div className="mt-5 bg-primary-light p-5 rounded-lg">
              <ReferIcon />
            </div>
            <p className="text-xs mt-5">
              Tell others about instant energy and get real cash in your wallet
              when they buy electricity.
            </p>
            <div className="text-xs mt-2 flex items-center font-semibold text-blue-500">
              <span>Learn more</span>
              <div className="w-4 h-4 bg-blue-500 ml-2 rounded-full text-white flex items-center justify-center text-xxs font-bold">
                <p className="pt-0.5">?</p>
              </div>
            </div>
          </div>

          <div className="pt-7 px-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-font-darker">
                Tips to save Electricty
              </h2>
              <div>
                <div className="text-sm text-font-muted flex space-x-4">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="text-xs text-font-muted cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => next()}
                    className="text-xs text-font-muted cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <Flickity
              className={
                'carousel mt-5 shadow-none outline-none bg-gray-500 overflow-hidden'
              } // default ''
              elementType={'div'} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate // default false
              static // default false
            >
              <div className="w-full h-56 rounded-lg bg-primary-dark">
                <div className="px-6 py-4 w-full h-full outline-white">
                  <span className="text-gray-500 text-xs font-semibold">
                    1 of 4
                  </span>
                </div>
              </div>
              <div className="w-full h-56 bg-blue-500"></div>
              <div className="w-full h-56 bg-red-500"></div>
            </Flickity>
          </div>
        </div>
      </div>
    </aside>
  );
};

Detailbar.propTypes = {};

export default Detailbar;
