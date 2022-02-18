import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import QuoteIcon from '../../public/svgs/quotes.svg';
import QuoteIcon2 from '../../public/svgs/quotes-sm.svg';
import CallCardIcon from '../../public/svgs/call-card.svg';

const SliderCard = () => {
  return (
    <>
      <div className="mr-40 w-full lg:flex">
        <div className="relative lg:w-1/2">
          <div className="relative -left-24 hidden lg:block">
            <Image src="/images/slider/slider-1.webp" width={456} height={408} />
          </div>
          <div className="relative flex justify-center lg:hidden">
            <Image
              src="/images/slider/slider-1.webp"
              width={205}
              height={165}
              className="object-contain"
            />
          </div>
          <CallCardIcon className="absolute top-20 -left-20 hidden lg:block" />
          <CallCardIcon className="absolute bottom-32 right-20 hidden lg:block" />
        </div>
        <div className="lg:w-1/2">
          <QuoteIcon className="hidden lg:block" />
          <QuoteIcon2 className="mx-auto mt-8 block lg:hidden" />
          <p className="mx-auto mt-6 max-w-md  text-center lg:mx-0 lg:mt-6 lg:text-left lg:text-2xl">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.
          </p>
          <div className="mt-5 flex items-center justify-center lg:mt-12 lg:justify-start">
            <a
              href=""
              className="h-8 w-8 rounded-full bg-secondary-twitter text-center lg:h-14 lg:w-14"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="mx-auto mt-1.5 h-5 w-5 text-3xl text-white lg:mt-3.5 lg:h-7 lg:w-7"
              />
            </a>
            <div className="ml-3">
              <h2 className="-mt-0.5 font-bold lg:-mt-0 lg:text-2xl ">Paul Emas</h2>
              <div className="flex space-x-1 lg:mt-1">
                <FontAwesomeIcon icon={faStar} className="text-xs text-secondary-yellowLight" />
                <FontAwesomeIcon icon={faStar} className="text-xs text-secondary-yellowLight" />
                <FontAwesomeIcon icon={faStar} className="text-xs text-secondary-yellowLight" />
                <FontAwesomeIcon icon={faStar} className="text-xs text-gray-300" />
                <FontAwesomeIcon icon={faStar} className="text-xs text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
