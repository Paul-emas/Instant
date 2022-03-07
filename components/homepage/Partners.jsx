import Image from 'next/image';

const Partners = () => {
  return (
    <div className="bg-white py-10 lg:py-20">
      <div className="container mx-auto px-4 lg:px-14">
        <h1 className="text-center text-base font-semibold uppercase text-font-dark lg:text-xl ">
          Energy Providers
        </h1>
        <div className="mt-7 hidden items-center justify-between lg:flex">
          <Image
            src="/images/partners/logo-1.png"
            width={146.7}
            height={39.09}
            className="object-cover"
          />
          <Image src="/images/partners/logo-2.png" width={106} height={29} />
          <Image
            src="/images/partners/logo-3.png"
            width={114.38}
            height={35.83}
            className="object-cover"
          />
          <Image
            src="/images/partners/logo-4.png"
            width={134}
            height={40}
            className="object-cover"
          />
          <Image
            src="/images/partners/logo-5.png"
            width={136.53}
            height={35.16}
            className="object-cover"
          />
          <Image
            src="/images/partners/logo-6.png"
            width={138}
            height={92}
            className="object-cover"
          />
        </div>
        <div className="mt-7 flex items-center justify-between space-x-5 lg:hidden">
          <div>
            <Image
              src="/images/partners/logo-1.png"
              width={146.7}
              height={39.09}
              className="object-cover"
            />
          </div>
          <div>
            <Image src="/images/partners/logo-2.png" width={106} height={29} />
          </div>
          <div>
            <Image
              src="/images/partners/logo-3.png"
              width={114.38}
              height={35.83}
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/partners/logo-4.png"
              width={134}
              height={40}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
