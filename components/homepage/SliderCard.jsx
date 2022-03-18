import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import QuoteIcon from '../../public/svgs/quotes.svg';

const SliderCard = () => {
  return (
    <>
      <div className="card-shadow h-[452px] w-full rounded-2xl border border-gray-100 py-8 px-7 lg:w-[376px]">
        <QuoteIcon />
        <p className="mt-10 text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea.
        </p>
        <div className="mt-20 flex items-center justify-center lg:mt-28 lg:justify-start">
          <a href="" className="h-8 w-8 rounded-full bg-secondary-twitter text-center lg:h-10 lg:w-10">
            <FontAwesomeIcon
              icon={faTwitter}
              className="mx-auto mt-1.5 h-5 w-5 text-3xl text-white lg:mt-2.5 lg:h-5 lg:w-5"
            />
          </a>
          <div className="ml-3">
            <h2 className="-mt-0.5 font-bold lg:-mt-0 lg:text-base">Paul Emas</h2>
            <div className="flex space-x-1">
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-xs text-secondary-yellowLight" />
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-xs text-secondary-yellowLight" />
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-xs text-secondary-yellowLight" />
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-xs text-gray-300" />
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-xs text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
