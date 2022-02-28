import Image from 'next/image';

const People = () => {
  return (
    <div className="bg-white bg-cover py-12 lg:py-32">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <div className="hidden lg:block">
            <Image
              src="/images/people-group.webp"
              width={615}
              height={139}
              className="mx-auto object-contain"
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
          <h1 className="mx-auto max-w-3xl text-2xl font-bold text-primary-dark lg:mt-4 lg:text-6xl">
            Join our community of energy enthusiasts today
          </h1>
        </div>
      </div>
    </div>
  );
};

export default People;
