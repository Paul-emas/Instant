import MobileMockup from '../../public/svgs/mobile-mockup2.svg';
import DownloadButtons from '../DownloadButtons';

const Manage = () => {
  return (
    <div className="py-36 bg-white">
      <div className="container px-10 mx-auto">
        <div className="grid grid-cols-2 space-x-10">
          <div>
            <h1 className="text-5xl font-gill max-w-md leading-tight font-bold">
              Manage your solar plan using our mobile app
            </h1>
            <p className="max-w-xl mt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore.
            </p>
            <DownloadButtons
              captionColor="text-gray-400"
              labelColor="text-primary-darker"
              className="border-2 border-primary-darker hover:bg-primary-darkest hover:border-primary-darkest icon-dark"
            />
          </div>
          <MobileMockup className="transform scale-125 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Manage;
