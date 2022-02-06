import gsap from 'gsap';
import Image from 'next/image';

const HomeBanners = () => {
  return (
    <div className="home-banner relative mb-20 flex w-full items-end bg-white sm:overflow-hidden">
      <div className="absolute h-full w-full overflow-hidden">
        <Image
          src="/images/banners/banner-2.webp"
          layout="fill"
          className="banner-image object-cover"
        />
      </div>
      <div className="container relative top-28 z-20 mx-auto px-4 sm:top-2 2xl:px-14">
        <div className="smpt-10 ml-auto w-full rounded-xl bg-primary-base px-10 py-8 sm:w-446 sm:rounded-t-xl sm:pb-16">
          <div className="max-w-md text-lg font-bold leading-snug text-white sm:text-3xl">
            Keep those family moments going never run out of power
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanners;
