import Image from 'next/image';

const Goals = () => {
  return (
    <div className="bg-white py-36">
      <div className="mx-auto px-4 lg:px-14 xl:container">
        <h1 className="mx-auto text-center text-xl font-bold text-primary-dark sm:px-0 lg:max-w-4xl lg:px-10 lg:text-5xl xl:leading-tight">
          Our Priority Goals
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-center text-sm text-gray-400 lg:text-base">
          By facilitating access to affordable clean energy for residential and business clusters Instant Energy is
          promoting sustainable living within cities and communities using innovation to improve energy access through
          our digital platform.
        </p>
        <div className="mt-20 flex justify-center space-x-10">
          <div>
            <Image src="/images/goal-1.png" width={221} height={221} objectFit="cover" />
          </div>
          <div>
            <Image src="/images/goal-2.png" width={221} height={221} objectFit="cover" />
          </div>
          <div>
            <Image src="/images/goal-3.png" width={221} height={221} objectFit="cover" />
          </div>
          <div>
            <Image src="/images/goal-4.png" width={221} height={221} objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
