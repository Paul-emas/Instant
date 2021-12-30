import gsap from 'gsap';
import Image from 'next/image';

const HomeBanners = () => {
  return (
    <div className="w-full bg-white flex items-end home-banner relative overflow-hidden">
      <div className="w-full h-full absolute overflow-hidden holder">
        <Image
          src="/images/banners/banner-2.webp"
          layout="fill"
          className="object-cover banner-image"
        />
      </div>
      <div className="container mx-auto 2xl:px-10 z-20">
        <div className="bg-primary-base rounded-t-xl px-10 pt-10 pb-16 w-446 ml-auto">
          <div className="text-white font-bold text-3xl leading-snug max-w-md">
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
