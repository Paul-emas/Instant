import Flickity from 'react-flickity-component';
import SliderCard from './SliderCard';

const Slider = () => {
  const slides = [1, 2, 3, 4];
  const flickityOptions = {
    draggable: false,
    initialIndex: 0,
    autoPlay: 2500,
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: true,
  };

  return (
    <div className="py-24 bg-white">
      <div className="container px-10 mx-auto">
        <div className="max-w-6xl mx-auto overflow-x-visible">
          <Flickity
            className={'carousel-home p-1 px-20 overflow-x-hidden'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static>
            {slides.map((slide, index) => (
              <SliderCard key={index} />
            ))}
          </Flickity>
        </div>
      </div>
    </div>
  );
};

export default Slider;
