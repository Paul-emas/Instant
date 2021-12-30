import gsap from 'gsap';
import Image from 'next/image';

const HomeBanners = () => {
  return (
    <div className="w-full bg-white flex items-end mb-20 home-banner relative sm:overflow-hidden">
      <div className="w-full h-full absolute overflow-hidden">
        <Image
          src="/images/banners/banner-2.webp"
          layout="fill"
          className="object-cover banner-image"
        />
      </div>
      <div className="container mx-auto px-4 2xl:px-10 z-20 relative top-28 sm:top-2">
        <div className="bg-primary-base rounded-xl sm:rounded-t-xl px-10 smpt-10 py-8 sm:pb-16 w-full sm:w-446 ml-auto">
          <div className="text-white font-bold text-lg sm:text-3xl leading-snug max-w-md">
            Keep those family moments going never run out of power
          </div>
          <p className="text-gray-300 text-sm mt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanners;
