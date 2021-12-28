import Image from 'next/image';

const People = () => {
  return (
    <div className="py-12 lg:py-32 bg-primary-base bg-cover overlay">
      <div className="container px-4 lg:px-10 mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <div className="hidden lg:block">
            <Image
              src="/images/people-group.webp"
              width={322}
              height={114}
              className="mx-auto"
              priority={true}
            />
          </div>
          <div className="block lg:hidden">
            <Image
              src="/images/people-group.webp"
              width={124}
              height={43}
              className="mx-auto object-contain"
              priority={true}
            />
          </div>
          <h1 className="text-white  font-semibold text-2xl lg:text-6xl lg:mt-4">
            What they say about us
          </h1>
          <p className="text-white text-sm lg:text-base mt-2 lg:mt-6 px-5 lg:px-0 lg:max-w-2xl mx-auto">
            Move your products to your customers at your will and convivence go
            about your business continently the modern way
          </p>
        </div>
      </div>
    </div>
  );
};

export default People;
