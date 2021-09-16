import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Flickity from 'react-flickity-component';

const Slider = () => {
  const route = [1, 2, 3, 4];

  let flicty = null;
  const flickityOptions = {
    draggable: false,
    initialIndex: 0,
    autoPlay: 3000,
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: true,
    pageDots: true,
  };

  const next = () => {
    flicty.flkty.nextButton.element.click();
  };

  const prev = () => {
    flicty.flkty.prevButton.element.click();
  };

  return (
    <div className="pt-7 px-5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-font-darker">
          Tips to save Electricty
        </h2>
        <div>
          <div className="text-sm text-font-muted flex space-x-4">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => prev()}
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
          'carousel mt-5 h-56 shadow-none outline-none overflow-hidden'
        }
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        ref={e => (flicty = e)}
        static>
        {route.map((el, index) => (
          <div
            key={index}
            className="w-full h-52 rounded-lg mr-20 bg-primary-dark">
            <div className="px-6 py-4 w-full h-full outline-white">
              <span className="text-gray-500 text-xs font-semibold">
                {index + 1} of {route.length}
              </span>
              <h3 className="text-sm font-semibold text-white mt-3">
                Home Applicances
              </h3>
              <p className="text-gray-500 text-xs text-left pr-3 mt-2">
                The best way to start saving on your electricity costs is to get
                smart with how you use electricity. Make these 21 no-cost
                changes in your home and you could save NGN 500 or more a year.
              </p>
            </div>
          </div>
        ))}
      </Flickity>
    </div>
  );
};

export default Slider;
