import Flickity from 'react-flickity-component';
import SliderCard from './SliderCard';

const Slider = () => {
  const slides = [
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.',
  ];
  const flickityOptions = {
    draggable: true,
    initialIndex: 0,
    autoPlay: 2500,
    freeScroll: false,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: true,
  };

  return (
    <div className="border-b bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="mx-auto hidden max-w-7xl overflow-x-visible lg:block">
          <Flickity
            className={'carousel-home overflow-x-hidden lg:px-12'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            {slides.slice(0, 4).map((slide, index) => (
              <div key={index} className="mr-44 flex w-full justify-between">
                <SliderCard />
                <SliderCard />
                <SliderCard />
              </div>
            ))}
          </Flickity>
        </div>
        <div className="block overflow-x-visible lg:hidden">
          <Flickity
            className={'carousel-home w-full overflow-x-hidden'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            {slides.map((slide, index) => (
              <div key={index} className="mr-44 flex w-full justify-between">
                <SliderCard />
              </div>
            ))}
          </Flickity>
        </div>
      </div>
    </div>
  );
};

export default Slider;
