import BannerIcon from '../../public/svgs/banner-2.svg';

const Control = () => {
  return (
    <div className="py-20 2xl:py-36 bg-white overflow-x-hidden">
      <div className="container px-10 mx-auto">
        <div className="grid grid-cols-2 space-x-20 mx-auto">
          <div className="flex items-center">
            <div>
              <h1 className="text-5xl font-gill max-w-lg leading-tight font-bold">
                Easily monitor, manage and control distributed energy systems
              </h1>
              <p className="max-w-xl mt-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
              <div className="px-2.5 lg:px-0 grid grid-cols-2 gap-x-5 sm:max-w-sm lg:max-w-md mt-8 lg:mt-10">
                <a
                  href="/"
                  className="py-5 rounded-xl uppercase bg-primary-base border-2  border-primary-base text-white text-center text-sm font-bold">
                  Request Demo
                </a>
                <div className="py-5"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="transform 2xl:scale-125">
              <BannerIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
