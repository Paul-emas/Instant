import Flickity from 'react-flickity-component';

const Counter = props => {
  const slides = [1, 2, 3, 4];
  const flickityOptions = {
    initialIndex: 0,
    autoPlay: 2500,
    wrapAround: false,
    freeScroll: false,
    prevNextButtons: false,
    pageDots: true,
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-10">
        <h1 className="text-2xl lg:text-5xl font-bold max-w-2xl text-center mx-auto  text-primary-darker">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
        </h1>
        <div className="hidden lg:flex justify-center items-center space-x-10 mt-24">
          <div className="w-279 h-332 mr-6 border border-primary-base flex flex-col justify-center items-center rounded-3xl text-center bg-primary-light">
            <p className="text-5xl  font-medium text-primary-darker">3000k</p>
            <span className="text-sm px-12 mt-4 text-font-dark">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </span>
          </div>
          <div className="w-279 h-332 mr-6 bg-secondary-lighterGreen border border-secondary-green flex flex-col justify-center items-center rounded-3xl text-center">
            <p className="text-5xl  font-medium text-primary-darker">460+</p>
            <span className="text-sm px-12 mt-4 text-font-dark">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </span>
          </div>
          <div className="w-279 h-332 bg-secondary-lighterPurple border border-secondary-purple flex flex-col justify-center items-center rounded-3xl text-center">
            <p className="text-5xl  font-medium text-primary-darker">150k</p>
            <span className="text-sm px-12 mt-4 text-font-dark">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </span>
          </div>
        </div>
      </div>
      <div className="mt-14 block lg:hidden">
        <Flickity
          className={'carousel-home p-1 px-20 overflow-x-hidden'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          <div className="w-257 h-274 mr-6 border border-primary-base flex flex-col justify-center items-center rounded-3xl text-center bg-primary-light">
            <p className="text-5xl  font-medium text-primary-darker">3000k</p>
            <span className="text-sm px-12 mt-4 text-font-dark">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </span>
          </div>
          <div className="w-257 h-274 mr-6 bg-secondary-lighterGreen border border-secondary-green flex flex-col justify-center items-center rounded-3xl text-center">
            <p className="text-5xl  font-medium text-primary-darker">460+</p>
            <span className="text-sm px-12 mt-4 text-font-dark">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </span>
          </div>
          <div className="w-257 h-274 bg-secondary-lighterPurple border border-secondary-purple flex flex-col justify-center items-center rounded-3xl text-center">
            <p className="text-5xl  font-medium text-primary-darker">150k</p>
            <span className="text-sm px-12 mt-4 text-font-dark">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </span>
          </div>
        </Flickity>
      </div>
      <div className="text-center mt-8 lg:mt-24">
        <p className="text-primary-darker text-sm lg:text-base font-semibold">
          <span>Need help? talk to our</span>
          <a href="" className="ml-2 text-primary-base">
            Customer support
          </a>
        </p>
      </div>
    </section>
  );
};

Counter.propTypes = {};

export default Counter;
