import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import SlideImage from '../../public/svgs/slider/slider-1.svg';
import QuoteIcon from '../../public/svgs/quotes.svg';
import CallCardIcon from '../../public/svgs/call-card.svg';

const SliderCard = () => {
  return (
    <>
      <div className="flex w-full mr-40">
        <div className="w-1/2 relative">
          <SlideImage />
          <CallCardIcon className="absolute top-20 -left-24" />
          <CallCardIcon className="absolute bottom-32 right-20" />
        </div>
        <div className="w-1/2">
          <QuoteIcon />
          <p className="text-2xl text-left font-gill max-w-md mt-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea.
          </p>
          <div className="flex items-center mt-12">
            <a
              href=""
              className="w-8 h-8 lg:w-14 lg:h-14 text-center bg-secondary-twitter rounded-full">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-3xl text-white mt-1.5 lg:mt-3"
              />
            </a>
            <div className="ml-3">
              <h2 className="text-2xl font-bold font-gill">Paul Emas</h2>
              <div className="flex space-x-1 mt-1">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-secondary-yellowLight text-xs"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-secondary-yellowLight text-xs"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-secondary-yellowLight text-xs"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-gray-300 text-xs"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-gray-300 text-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
