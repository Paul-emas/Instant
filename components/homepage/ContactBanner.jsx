import Image from 'next/image';

const ContactBanner = () => {
  return (
    <div className="home-banner relative mb-40 flex w-full items-end bg-white sm:overflow-hidden lg:mb-0 lg:h-[800px] xl:mb-0">
      <div className="absolute h-full w-full overflow-hidden bg-fixed">
        <Image
          src="/images/banners/banner-3.webp"
          layout="fill"
          className="banner-image object-cover"
          priority
        />
      </div>
      <div className="container relative top-28 z-20 mx-auto px-4 sm:top-2 xl:container 2xl:px-14">
        <div className="smpt-10 ml-auto w-full rounded-xl bg-primary-base px-10 py-8 sm:w-446 sm:rounded-t-xl sm:pb-16">
          <div className="max-w-md text-lg font-bold leading-snug text-white sm:text-3xl">
            We ensure you have the best experience
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Our goal is to ensure you get only the best service, our customer support reps are
            available 24/7 to attend to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
