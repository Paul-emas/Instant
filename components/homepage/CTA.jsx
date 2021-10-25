import MobileMockup from '../../public/svgs/mobile-mockup.svg';
import DownloadButtons from '../DownloadButtons';

const CTA = () => {
  return (
    <div className="py-16 lg:pt-32 bg-primary-darker">
      <div className="container px-4 lg:px-10 mx-auto">
        <div className="grid lg:grid-cols-2 space-x-10">
          <div className="text-center lg:text-left">
            <h1 className="text-white text-2xl lg:text-4xl font-gill max-w-xl font-bold">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
            </h1>
            <p className="text-gray-400 text-sm lg:text-base max-w-xl mt-4">
              Move your products to your customers at your will and convivence
              go about your business continently the modern way
            </p>
            <DownloadButtons
              captionColor="text-gray-400"
              className="border-2 border-gray-400 hover:bg-primary-darkest hover:border-primary-darkest"
            />
          </div>
          <MobileMockup className="-mt-12 hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
