import Flickity from 'react-flickity-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

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
    <div className="px-5 pt-7">
      <div className="items-center justify-between lg:flex">
        <h2 className="text-lg font-bold text-font-darker">
          Tips to save Electricty
        </h2>
        <div>
          <div className="flex space-x-4 text-sm text-font-muted">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => prev()}
              className="cursor-pointer text-xs text-font-muted"
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={() => next()}
              className="cursor-pointer text-xs text-font-muted"
            />
          </div>
        </div>
      </div>
      <Flickity
        className={
          'carousel mt-5 h-56 overflow-hidden shadow-none outline-none'
        }
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        ref={e => (flicty = e)}
        static
      >
        {route.map((el, index) => (
          <div
            key={index}
            className="mr-20 h-52 w-full rounded-lg bg-primary-dark"
          >
            <div className="h-full w-full px-6 py-4 outline-white">
              <span className="text-xs font-semibold text-gray-500">
                {index + 1} of {route.length}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-white">
                Home Applicances
              </h3>
              <p className="mt-2 pr-3 text-left text-xs text-gray-500">
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
